import Typewriter from './Typewriter';
import {useInView} from '../hooks/useInView';
export default function SectionHeading({eyebrow,title,description,dark=false,center=false}:{eyebrow:string;title:string;description?:string;dark?:boolean;center?:boolean}){
 const {ref,inView}=useInView(.08);
 return <div ref={ref} className={`${center?'text-center mx-auto max-w-3xl':''} ${inView?'animate-fade-up':'reveal-pending'}`}>
  <p className="eyebrow text-accent">{eyebrow}</p>
  <h2 className={`section-heading mt-4 ${dark?'!text-white':''}`}>{inView?<Typewriter text={title}/>:<span className="invisible">{title}</span>}</h2>
  {description&&<p className={`mt-5 leading-relaxed ${dark?'text-slate-300':'text-slate-600'}`}>{description}</p>}
 </div>;
}
