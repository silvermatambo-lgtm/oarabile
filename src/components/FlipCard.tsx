import {Link} from 'react-router-dom';
import {useState} from 'react';
import { ArrowUpRight } from 'lucide-react';
export default function FlipCard({number,title,summary,image}:{number:string;title:string;summary:string;image:string}){
 const [flipped,setFlipped]=useState(false);
 return <Link to="/services" className={`flip-card group block ${flipped?'is-flipped':''}`} onClick={e=>{if(window.matchMedia('(hover: none)').matches&&!flipped){e.preventDefault();setFlipped(true)}}} aria-label={`Learn about ${title}`}><span className="flip-card-inner">
   <span className="flip-face flip-front"><img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><span className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/5"/><span className="relative z-10 block mt-auto p-7"><span className="text-accent text-xs tracking-[.2em] font-extrabold">{number} / OUR EXPERTISE</span><strong className="block text-2xl mt-3 text-white font-display">{title}</strong><span className="block mt-4 text-white/75 text-sm">Hover or tap to explore <ArrowUpRight size={15} className="inline"/></span></span></span>
   <span className="flip-face flip-back"><span className="text-accent font-bold text-sm tracking-widest">{number} / SERVICE</span><strong className="text-white text-2xl block mt-4 font-display">{title}</strong><span className="text-slate-200 text-sm block leading-7 mt-4">{summary}</span><span className="inline-flex text-slate-950 font-bold rounded-lg bg-accent mt-6 py-2 px-4 items-center gap-2">View details <ArrowUpRight size={15}/></span></span>
  </span></Link>;
}
