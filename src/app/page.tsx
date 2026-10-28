import { ArrowUpRight, ArrowRight, Braces, DatabaseZap, Workflow, BrainCircuit, ShieldCheck } from 'lucide-react';
import { HeroScene } from '@/components/hero-scene';
const services = [
  { title: 'Software a medida', text: 'Aplicaciones web y herramientas que se adaptan a tus procesos.', Icon: Braces, tag: 'DESARROLLO' },
  { title: 'Automatización', text: 'Menos tareas repetitivas. Más tiempo para las decisiones importantes.', Icon: Workflow, tag: 'OPERACIONES' },
  { title: 'Datos y analítica', text: 'Información confiable, comparable y lista para generar valor.', Icon: DatabaseZap, tag: 'INTELIGENCIA' },
  { title: 'IA aplicada', text: 'Asistentes y flujos inteligentes con control, trazabilidad y propósito.', Icon: BrainCircuit, tag: 'INNOVACIÓN' },
];
export default function Home() {
  return <main>
    <header className="topbar wrap"><a className="brand" href="#inicio" aria-label="Vyntrava Technologies, inicio"><span className="brand-mark">V</span><span>VYNTRAVA<span className="brand-light"> TECHNOLOGIES</span></span></a>
      <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#enfoque">Nuestro enfoque</a><a className="nav-cta" href="#contacto">Hablemos <ArrowUpRight size={15}/></a></nav></header>
    <section id="inicio" className="hero wrap">
      <div className="hero-copy"><p className="eyebrow"><span className="pulse"/> TECNOLOGÍA CON PROPÓSITO</p>
        <h1>Ideas complejas.<br/><em>Soluciones claras.</em></h1>
        <p className="lead">Creamos software, automatizaciones y soluciones inteligentes para que tu negocio avance con datos confiables y tecnología que funciona.</p>
        <div className="actions"><a className="primary" href="#contacto">Contanos tu desafío <ArrowUpRight size={18}/></a><a className="secondary" href="#servicios">Explorar servicios <ArrowRight size={17}/></a></div>
        <div className="hero-proof"><ShieldCheck size={18}/><span>Ingeniería verificable · Privacidad · Soluciones sostenibles</span></div>
      </div><HeroScene />
    </section>
    <section className="manifesto"><div className="wrap manifesto-inner"><span>01 / QUÉ HACEMOS</span><p>Conectamos <strong>tecnología, procesos y decisiones</strong> para transformar problemas concretos en herramientas útiles.</p></div></section>
    <section id="servicios" className="section wrap"><div className="section-head"><div><p className="eyebrow">CAPACIDADES</p><h2>La tecnología correcta.<br/><em>Para el problema real.</em></h2></div><p>Diseñamos soluciones proporcionales a cada necesidad, sin complejidad innecesaria.</p></div>
      <div className="services">{services.map(({title,text,Icon,tag},i)=><article className="service" key={title}><div className="service-top"><span>{String(i+1).padStart(2,'0')} / {tag}</span><Icon size={26} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={22}/></article>)}</div>
    </section>
    <section id="enfoque" className="approach"><div className="wrap approach-grid"><div><p className="eyebrow">NUESTRA FORMA DE TRABAJAR</p><h2>Menos promesas.<br/><em>Más evidencia.</em></h2></div><div><p>No se trata de incorporar tecnología porque está de moda. Se trata de construir lo que tu organización realmente necesita.</p><div className="principles"><span>01 <strong>Entender antes de construir</strong></span><span>02 <strong>Validar con pruebas</strong></span><span>03 <strong>Entregar soluciones mantenibles</strong></span></div></div></div></section>
    <section id="contacto" className="contact wrap"><p className="eyebrow">HABLEMOS DE TU PROYECTO</p><h2>Tu próximo avance<br/><em>empieza con una conversación.</em></h2><p>Contanos qué necesitás resolver. Te ayudamos a identificar el siguiente paso.</p><a className="primary" href="mailto:sebasmol2010@gmail.com?subject=Consulta%20comercial%20-%20Vyntrava%20Technologies">Contactar a Vyntrava <ArrowUpRight size={18}/></a></section>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} Vyntrava Technologies</span><span>Software · Datos · Automatización · IA</span></footer>
  </main>;
}
