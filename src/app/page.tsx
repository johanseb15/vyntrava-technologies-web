import { ArrowUpRight, ArrowRight, Code2, Workflow, ChartNoAxesCombined, BrainCircuit, ShieldCheck, Layers3, ClipboardCheck, GitBranch, MonitorCog, Database, Check, Mail } from 'lucide-react';
import { HeroScene } from '@/components/hero-scene';
import { SiteNavigation } from '@/components/site-navigation';
import Link from 'next/link';

const solutions = [
  { title: 'Software a medida', description: 'Aplicaciones, portales e integraciones que se adaptan a la forma en que trabaja tu empresa.', Icon: Code2, tag: 'DESARROLLO' },
  { title: 'Automatización', description: 'Conectamos herramientas y eliminamos tareas repetitivas para reducir fricciones operativas.', Icon: Workflow, tag: 'OPERACIONES' },
  { title: 'Datos y analítica', description: 'Organizamos información dispersa y creamos tableros para tomar mejores decisiones.', Icon: ChartNoAxesCombined, tag: 'INTELIGENCIA' },
  { title: 'IA aplicada', description: 'Asistentes y procesos inteligentes con supervisión, privacidad y resultados verificables.', Icon: BrainCircuit, tag: 'INNOVACIÓN' },
];

const stages = [
  ['01', 'Entender', 'Diagnóstico y alcance'],
  ['02', 'Diseñar', 'Solución proporcional'],
  ['03', 'Construir', 'Desarrollo iterativo'],
  ['04', 'Verificar', 'Pruebas y evidencia'],
  ['05', 'Evolucionar', 'Mejora continua'],
];

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#inicio" className="wordmark" aria-label="Vyntrava Technologies — inicio">
            <span className="wordmark-symbol">V<span>.</span></span>
            <span className="wordmark-name">VYNTRAVA<small>TECHNOLOGIES</small></span>
          </a>
          <SiteNavigation />
        </div>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-content">
            <p className="eyebrow eyebrow-dark">INGENIERÍA TECNOLÓGICA PARA EMPRESAS</p>
            <h1 id="hero-title">Soluciones reales para un trabajo más eficiente.</h1>
            <p className="hero-description">Desarrollamos software, automatizaciones y soluciones de datos que se adaptan a tu negocio y ayudan a resolver problemas concretos.</p>
            <div className="hero-actions">
              <a href="#contacto" className="button button-dark">Contanos tu desafío <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href="#servicios" className="text-link">Conocer nuestros servicios <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ejemplo conceptual de un panel de operaciones">
            <div className="dashboard" role="img" aria-label="Demostración conceptual de una plataforma de operaciones con procesos y actividad">
              <div className="dashboard-side"><span className="dashboard-logo">V.</span><span className="dash-side-line active"/><span className="dash-side-line"/><span className="dash-side-line short"/><span className="dash-side-line"/></div>
              <div className="dashboard-main">
                <div className="dashboard-top"><span>VYNTRAVA <span className="dashboard-muted">/ DEMO</span></span><span className="status-dot">Panel conceptual</span></div>
                <div className="dashboard-heading"><strong>Operaciones</strong><span>Vista general</span></div>
                <div className="dashboard-stats"><div><small>Procesos</small><b>12</b></div><div><small>Estado</small><b>Activo</b></div><div><small>Áreas</small><b>04</b></div></div>
                <div className="dashboard-chart"><div className="chart-title">Flujo de operaciones <span>Ejemplo ilustrativo</span></div><svg viewBox="0 0 380 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#64dcbf" stopOpacity=".25"/><stop offset="1" stopColor="#64dcbf" stopOpacity="0"/></linearGradient></defs><path d="M0 78 L35 60 L65 72 L100 43 L132 58 L166 31 L198 54 L231 22 L264 47 L296 35 L329 13 L360 40 L380 20 L380 100 L0 100 Z" fill="url(#area)"/><path d="M0 78 L35 60 L65 72 L100 43 L132 58 L166 31 L198 54 L231 22 L264 47 L296 35 L329 13 L360 40 L380 20" fill="none" stroke="#70e2cb" strokeWidth="2"/></svg></div>
                <div className="dashboard-events"><span><Check size={12}/> Sincronización de datos</span><span><Check size={12}/> Flujo automatizado</span><span><Check size={12}/> Validación de registros</span></div>
              </div>
            </div>
            <span className="visual-disclaimer">Visualización conceptual · No corresponde a un cliente real</span>
          </div>
        </div>
      </section>

      <section className="solutions-section dark-section" id="servicios" aria-labelledby="solutions-title">
        <div className="wrap">
          <div className="section-intro"><div><p className="eyebrow">LO QUE HACEMOS</p><h2 id="solutions-title">Tecnología aplicada<br/>a tus desafíos.</h2></div><p>Combinamos desarrollo, datos y automatización para resolver problemas concretos, con un enfoque pragmático y orientado a resultados.</p></div>
          <div className="solution-grid">{solutions.map(({title,description,Icon,tag}) => <article className="solution-card" key={title}><div className="solution-card-top"><Icon size={27} strokeWidth={1.7} aria-hidden="true"/><span>{tag}</span></div><h3>{title}</h3><p>{description}</p><ArrowUpRight className="solution-arrow" size={19} aria-hidden="true"/></article>)}</div>
        </div>
      </section>

      <section className="work-section light-section" id="proyectos" aria-labelledby="work-title">
        <div className="wrap work-layout">
          <div className="work-photo"><div className="work-photo-caption"><span>DESARROLLO APLICADO</span><strong>La solución correcta empieza por entender el problema.</strong></div></div>
          <div className="work-copy"><p className="eyebrow eyebrow-dark">PROYECTOS Y SOLUCIONES</p><h2 id="work-title">Construimos herramientas que generan valor.</h2><p>Cada proyecto comienza con una necesidad concreta. Diseñamos, desarrollamos y verificamos soluciones para que funcionen en el entorno de trabajo real.</p><a className="button button-dark" href="#productos">Explorar demostraciones <ArrowUpRight size={18} aria-hidden="true"/></a></div>
          <div className="work-photo-stack"><div className="stack-image stack-image-industrial"/><div className="stack-image stack-image-data"/><div className="stack-image stack-image-office"/></div>
        </div>
      </section>

      <section className="product-section" id="productos" aria-labelledby="product-title"><div className="wrap product-layout">
        <div><p className="eyebrow eyebrow-dark">PRODUCTOS Y LABORATORIO</p><h2 id="product-title">Ideas que se pueden probar, no solo imaginar.</h2><p>Estas iniciativas forman parte de nuestro trabajo real de ingeniería. Algunas son herramientas técnicas y otras siguen en desarrollo: identificamos su estado sin presentarlas como productos terminados.</p><a className="text-link" href="#contacto">Consultar por una demostración <ArrowRight size={17} aria-hidden="true"/></a></div>
        <div className="product-examples">
          <article><MonitorCog size={24} aria-hidden="true"/><div><span className="project-tag">DESARROLLO PROPIO · METODOLOGÍA</span><h3>ADEL Framework</h3><p>Herramientas y procesos para diseñar, construir y verificar software con evidencia. Repositorio técnico disponible para consulta.</p><a className="product-link" href="https://github.com/johanseb15/ADEL-Framework" target="_blank" rel="noopener noreferrer">Explorar repositorio <ArrowUpRight size={15} aria-hidden="true"/></a></div></article>
          <article><Database size={24} aria-hidden="true"/><div><span className="project-tag">INICIATIVA PROPIA · EVOLUCIÓN</span><h3>Enki</h3><p>Línea de investigación y desarrollo de soluciones de información y análisis. Consultanos por el alcance y las demostraciones disponibles.</p><a className="product-link" href="#contacto">Consultar estado <ArrowRight size={15} aria-hidden="true"/></a></div></article>
          <article><Layers3 size={24} aria-hidden="true"/><div><span className="project-tag">PROTOTIPO · EN VALIDACIÓN</span><h3>WhoLivesHere</h3><p>Experiencia interactiva utilizada para explorar interfaces, recorridos y pruebas visuales. No se presenta como producto comercial finalizado.</p><a className="product-link" href="#contacto">Consultar demostración <ArrowRight size={15} aria-hidden="true"/></a></div></article>
        </div>
      </div></section>

      <section className="engineering-section dark-section" id="ingenieria" aria-labelledby="engineering-title">
        <div className="wrap engineering-layout">
          <div className="engineering-copy"><p className="eyebrow">NUESTRA INGENIERÍA</p><h2 id="engineering-title">ADEL. Una forma sistemática de construir.</h2><p>Trabajamos con alcance definido, pruebas y evidencia, controles de seguridad y mejora continua. La calidad no se agrega al final: forma parte del proceso.</p><div className="engineering-proof"><span><ShieldCheck size={17}/> Validaciones verificables</span><span><GitBranch size={17}/> Evolución controlada</span><span><ClipboardCheck size={17}/> Entregables claros</span></div></div>
          <div className="engineering-visual"><HeroScene/><p className="scene-caption">Arquitectura de servicios y flujos de datos · Diagrama ilustrativo</p></div>
        </div>
        <div className="wrap process-row" aria-label="Etapas de nuestra metodología">{stages.map(([n,title,detail]) => <div className="process-step" key={n}><span>{n}</span><strong>{title}</strong><small>{detail}</small></div>)}</div>
      </section>

      <section className="contact-section" id="contacto" aria-labelledby="contact-title">
        <div className="contact-photo" aria-hidden="true"/><div className="wrap contact-layout"><div><p className="eyebrow eyebrow-dark">EMPECEMOS A TRABAJAR</p><h2 id="contact-title">Hablemos de tu proyecto.</h2><p>Contanos qué necesitás resolver. Podemos ayudarte a definir el próximo paso.</p><a className="button button-dark" href="mailto:sebasmol2010@gmail.com?subject=Consulta%20comercial%20-%20Vyntrava%20Technologies">Contactar a Vyntrava <Mail size={17} aria-hidden="true"/></a></div><div className="contact-benefits"><span><Check size={18}/> Primera conversación sin compromiso</span><span><Check size={18}/> Propuesta ajustada al problema</span><span><Check size={18}/> Enfoque de ingeniería verificable</span><span><Check size={18}/> Comunicación directa</span></div></div>
      </section>
      <footer className="footer"><div className="wrap footer-inner"><span>© {new Date().getFullYear()} Vyntrava Technologies · Córdoba, Argentina</span><span>Ingeniería de software · Datos · Automatización · IA</span><div className="footer-links"><Link href="/politica-de-privacidad/">Privacidad</Link><a href="#inicio">Volver arriba ↑</a></div></div></footer>
    </main>
  );
}
