import Typewriter from './Typewriter';
export default function PageHero({eyebrow,title,subtitle}:{eyebrow:string;title:string;subtitle:string}){
 return <section className="relative bg-slate-950 text-white pt-44 pb-24 overflow-hidden min-h-[360px]">
   <div className="absolute inset-0 bg-cover bg-center opacity-20 page-hero-bg"/>
   <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65"/>
   <div className="absolute -right-16 top-0 w-96 h-96 rounded-full border-[60px] border-yellow-400/10 animate-float-slow"/>
   <div className="container-site relative"><p className="eyebrow text-accent animate-fade-up">{eyebrow}</p><h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-5 max-w-4xl leading-tight"><Typewriter text={title}/></h1><div className="h-1 w-24 bg-accent rounded mt-7 mb-6"/><p className="text-slate-200 max-w-2xl leading-relaxed text-lg animate-slide-left">{subtitle}</p></div>
 </section>;
}
