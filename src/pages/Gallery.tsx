import {Link} from 'react-router-dom';
import {ArrowRight, ClipboardList} from 'lucide-react';
import {site} from '../config/site';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
const projects=[
 ['School renovation','Department of Education','Renovation work · subcontract'],
 ['Taxi bays and kerbing','Tlokwe Municipality','Paving and kerbing · subcontract'],
 ['Public toilet construction','Tlokwe Municipality','Construction works · subcontract'],
 ['Speed-hump construction','Tlokwe Municipality','Road safety and civil works'],
 ['Hostel renovations','Tlokwe Municipality','Maintenance and renovation'],
 ['Grass cutting at Dassierand','Tlokwe Municipality','Grounds maintenance'],
 ['Daily plumbing and maintenance','Department of Justice','Facilities maintenance'],
 ['Support and renovations','Department of Social Development','Maintenance and improvements'],
 ['Paving of walkway','Independent Development Trust','Walkway paving'],
 ['Site cleaning at Ext 11','Tlokwe Municipality','Illegal dumping site cleaning'],
 ['Carpentry works','Ratlhogo Construction','Carpentry'],
 ['Church paving','Tlokwe 405','Paving works'],
 ['Civil works','KD Civils','Subcontracted civil construction'],
 ['Carpentry works','Kapis Engineering Solutions','Carpentry'],
 ['Tiling and driveway paving','Department of Agriculture & Rural Development','Tiling, stoep and driveway paving'],
 ['Water tank supply and installation','Department of Health','Ventersdorp Hospital'],
 ['100 kVA generator supply and installation','Department of Public Works','Health facility installation'],
 ['Electrical installation in new building','KD Civils','Subcontracted electrical installation'],
 ['Carpentry works','Pongo Trading','Carpentry'],
 ];
export default function Gallery(){return <><PageHero eyebrow="OUR EXPERIENCE" title="Selected completed projects" subtitle="Explore assignments listed in Oarabile Trading Enterprise’s company profile across the public and private sectors."/>
 <section className="py-20 bg-white"><div className="container-site"><SectionHeading eyebrow="PROFILE HIGHLIGHTS" title="Building a track record" description="These examples are drawn from the company’s supplied project history. Photographs are representative stock imagery — not photographs of the named projects."/><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">{site.gallery.map((item,i)=><Reveal key={item.id}><article className="card-base overflow-hidden h-full group"><div className="relative h-60 overflow-hidden"><img src={item.image} alt="Representative construction and infrastructure photograph" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/><span className="absolute bottom-4 left-4 rounded-md px-3 py-1 bg-slate-950/90 text-white text-xs">Representative image</span></div><div className="p-6"><p className="text-accent font-bold text-xs tracking-widest">PROJECT {String(i+1).padStart(2,'0')}</p><h3 className="font-display text-xl font-bold mt-3">{item.title}</h3><p className="text-sm text-slate-500 mt-3">{item.category}</p></div></article></Reveal>)}</div></div></section>
 <section className="py-20 bg-slate-100"><div className="container-site"><SectionHeading eyebrow="RECORDED WORK" title="More project experience" description="Further examples listed in the 2013 company profile and its completed-project schedules."/><div className="grid md:grid-cols-2 gap-4 mt-10">{projects.map(([title,client,category],i)=><Reveal key={title+client+i}><div className="bg-white border border-slate-200 rounded-xl p-5 flex gap-4 hover:shadow-md transition-shadow h-full"><ClipboardList className="text-accent shrink-0 mt-1"/><div><p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{client}</p><h3 className="font-display font-bold text-lg mt-1">{title}</h3><p className="text-slate-500 text-sm mt-1">{category}</p></div></div></Reveal>)}</div><p className="text-sm text-slate-500 mt-8">Project references are from the supplied company profile. For recent work photographs, project documents or references, please contact the team.</p><Link to="/contact" className="btn-primary mt-7">Ask about our experience <ArrowRight size={18}/></Link></div></section>
 </>}
