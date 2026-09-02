"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./mugi.module.css";

const breads = [
  { n:"01", name:"朝のカンパーニュ", note:"全粒粉・自家製酵母", price:"¥680", image:"/assets/web-works/mugi-counter-v2.png", pos:"18% 55%", zoom:1.05, size:"wide" },
  { n:"02", name:"発酵バターのクロワッサン", note:"毎朝 8:00 焼き上がり", price:"¥320", image:"/assets/web-works/mugi-to-hi-hero.png", pos:"48% 82%", zoom:1.45, size:"narrow" },
  { n:"03", name:"季節の果実デニッシュ", note:"本日はプラム", price:"¥420", image:"/assets/web-works/mugi-counter-v2.png", pos:"78% 68%", zoom:1.5, size:"wide" },
  { n:"04", name:"くるみと蜂蜜", note:"小さめの食卓パン", price:"¥360", image:"/assets/web-works/mugi-to-hi-hero.png", pos:"85% 35%", zoom:1.35, size:"narrow" },
  { n:"05", name:"今日のバゲット", note:"北海道産小麦", price:"¥390", image:"/assets/web-works/mugi-counter-v2.png", pos:"35% 48%", zoom:1.35, size:"wide" },
] as const;

export default function BreadShelf(){
  const catalogRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active:false, x:0, scroll:0 });
  const [dragging,setDragging] = useState(false);
  const move = (direction:number) => catalogRef.current?.scrollBy({left:direction * Math.min(520,catalogRef.current.clientWidth * .72),behavior:"smooth"});

  return <section className={styles.shelf} id="today">
    <div className={styles.shelfIntro}><span>THE BREAD SHELF</span><p>写真をつかんで、<br/>棚を横へめくる。</p><div className={styles.shelfControls}><button onClick={() => move(-1)} aria-label="前のパンを見る">←</button><button onClick={() => move(1)} aria-label="次のパンを見る">→</button></div><small>ドラッグ / スワイプ / 矢印ボタン</small></div>
    <div ref={catalogRef} className={`${styles.catalog} ${dragging ? styles.dragging : ""}`} onPointerDown={(event) => { if(!catalogRef.current) return; drag.current={active:true,x:event.clientX,scroll:catalogRef.current.scrollLeft}; setDragging(true); event.currentTarget.setPointerCapture(event.pointerId); }} onPointerMove={(event) => { if(!drag.current.active || !catalogRef.current) return; catalogRef.current.scrollLeft=drag.current.scroll-(event.clientX-drag.current.x); }} onPointerUp={(event) => { drag.current.active=false; setDragging(false); event.currentTarget.releasePointerCapture(event.pointerId); }} onPointerCancel={() => { drag.current.active=false; setDragging(false); }}>
      {breads.map(item => <figure key={item.n} className={item.size === "wide" ? styles.wide : styles.narrow}><div><Image draggable={false} src={item.image} alt={item.name} fill sizes="(max-width: 700px) 76vw, 34vw" style={{objectPosition:item.pos, transform:`scale(${item.zoom})`, transformOrigin:item.pos}} /></div><figcaption><span>{item.n}</span><h2>{item.name}</h2><p>{item.note}</p><strong>{item.price}</strong></figcaption></figure>)}
    </div>
  </section>;
}
