import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import {readFileSync} from "node:fs";
import ts from "typescript";

const source = readFileSync(new URL('../app/analytics.ts', import.meta.url), 'utf8');
function setup(origin = 'https://sho-design-site.vercel.app') {
  const storage = new Map(), scripts = [], listeners = new Map();
  const context = {
    exports: {}, URL, URLSearchParams, Date, Event,
    localStorage: {getItem: key => storage.get(key) ?? null, setItem: (key,value) => storage.set(key,value)},
    document: {cookie: '', referrer: 'https://docs.google.com/forms/?entry.889758560=PRIVATE_EMAIL', createElement: () => ({}), head: {appendChild: script => scripts.push(script)}},
    window: {location: {origin, hostname: new URL(origin).hostname, pathname: '/contact', search: '?email=PRIVATE_EMAIL&utm_source=note&utm_content=n640994daa5cd'}, addEventListener: (name, fn) => listeners.set(name,fn), removeEventListener: name => listeners.delete(name), dispatchEvent: event => listeners.get(event.type)?.(event)},
  };
  vm.runInNewContext(ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,context);
  return {...context, api:context.exports, storage, scripts};
}
test('no tag or events before consent, after refusal, on localhost or when excluded', () => {
  for (const mode of ['unknown','declined','excluded','localhost']) {
    const s=setup(mode==='localhost'?'http://localhost:3100':undefined);
    if(mode!=='unknown') s.api.savePreference(mode==='declined'?'declined':'accepted',mode==='excluded');
    s.api.trackPage('/contact'); s.api.trackAction('consultation_form_open');
    assert.equal(s.scripts.length,0); assert.equal(s.window.dataLayer,undefined);
  }
});
test('only clean public labels leave the app; duplicate pageviews suppressed and SPA supported', () => {
  const s=setup(); s.api.savePreference('accepted',false); s.api.trackPage('/contact'); s.api.trackPage('/contact');
  s.api.trackAction('consultation_form_open'); s.api.trackAction('PRIVATE_EVENT'); s.api.trackPage('/services');
  assert.equal(s.scripts.length,1);
  assert.equal(s.scripts[0].referrerPolicy,'no-referrer');
  const queue=s.window.dataLayer;
  assert.equal(queue.filter(x=>x[0]==='event'&&x[1]==='page_view').length,2);
  assert.ok(!JSON.stringify(queue).includes('PRIVATE'));
  assert.ok(!JSON.stringify(queue).includes('entry.'));
  assert.equal(queue.find(x=>x[0]==='event'&&x[1]==='page_view')[2].campaign_content,'n640994daa5cd');
  const config=queue.find(x=>x[0]==='config')[2];
  assert.equal(config.allow_google_signals,false); assert.equal(config.send_page_view,false);
});
test('revocation stops future events and cross-tab exclusion stops measurement', () => {
  const s=setup(); s.api.savePreference('accepted',false); s.api.trackPage('/');
  s.api.savePreference('declined',false); const length=s.window.dataLayer.length;
  s.api.trackAction('consult_click'); s.api.trackPage('/services');
  assert.equal(s.window.dataLayer.length,length); assert.equal(s.window['ga-disable-G-W1QDFL0ZET'],true);
  s.api.savePreference('accepted',true); s.api.trackPage('/contact'); assert.equal(s.window.dataLayer.length,length);
});
test('expired or invalid preferences and unknown URLs fail closed', () => {
  const s=setup(); s.storage.set(s.api.CONSENT_KEY,JSON.stringify({value:'accepted',at:0}));
  assert.equal(s.api.readPreference().consent,null); assert.equal(s.api.safePage('/PRIVATE_EMAIL'),'/other');
  assert.equal(s.api.safeReferrer('https://note.com/user?email=PRIVATE_EMAIL'),'https://note.com/');
  assert.equal(JSON.stringify(s.api.safeCampaign('?utm_source=PRIVATE_EMAIL')),'{}');
});
