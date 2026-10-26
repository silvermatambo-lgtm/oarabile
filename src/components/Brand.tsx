import { site } from '../config/site';
export default function Brand({ compact=false }: {compact?:boolean}){
 return <img src={site.brand.logo} alt="Oarabile Trading Enterprise (Pty) Ltd" className={`brand-logo rounded-lg bg-white object-contain shadow-sm ${compact?'brand-logo-compact':''}`} width="270" height="90" />;
}
