import fs from 'node:fs'
import path from 'node:path'
import { ArrowUpRight, Menu, MoveUpRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

const services = [
  {
    number: '01',
    duration: '6–8 SEM',
    title: 'BRANDING',
    description: 'Marcas nuevas o relanzamientos completos. Concepto, identidad y sistema visual desde la raíz.',
  },
  {
    number: '02',
    duration: '3–6 SEM',
    title: 'DIRECCIÓN CREATIVA',
    description: 'Marcas existentes con un momento puntual: campañas, lanzamientos, hitos, contenido grande.',
  },
  {
    number: '03',
    duration: '2–4 SEM',
    title: 'CONSULTORÍA ESTRATÉGICA',
    description: 'Marcas que necesitan pensar antes de hacer. Pura consultoría creativa, sin entregable visual.',
  },
]

const projects = [
  { name: 'Nube', type: 'Identidad visual', tone: 'lavender' },
  { name: 'Marea', type: 'Dirección creativa', tone: 'peach' },
  { name: 'Ritual', type: 'Branding', tone: 'mint' },
  { name: 'Lima', type: 'Sistema visual', tone: 'yellow' },
]

function getResourceImages() {
  const resourcePath = path.join(process.cwd(), 'public', 'resources')
  try {
    return fs
      .readdirSync(resourcePath)
      .filter((file) => /\.(avif|gif|jpeg|jpg|png|webp)$/i.test(file))
      .sort(() => Math.random() - 0.5)
      .map((file) => `/resources/${encodeURIComponent(file)}`)
  } catch {
    return []
  }
}

export default function Page() {
  const images = getResourceImages()

  return (
    <main>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Navegación principal">
          <a className="brand" href="#top" aria-label="Popi Studio, inicio">popi<span>*</span></a>
          <div className="desktop-nav">
            <a href="#studio">Estudio</a>
            <a href="#servicios">Servicios</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a className="nav-cta" href="#contacto"><span>●</span> Empecemos algo grande</a>
          <button className="menu-button" type="button" aria-label="Abrir menú"><Menu size={19} strokeWidth={1.5} /></button>
        </nav>
      </header>

      <section id="top" className="hero section-pad">
        <div className="eyebrow">Branding · Dirección creativa · Consultorías estratégicas</div>
        <div className="hero-copy">
          <p className="hero-kicker">SOMOS</p>
          <h1>Popi<span>*</span><br />diseño &<br />creatividad</h1>
          <p className="hero-description">Popi Studio nace para hacer visible lo que todavía no se ve. Pensamos cada marca de forma integral: concepto, sistema visual, criterio comunicacional y dirección creativa.<br /><strong>Damos forma a lo invisible para hacerlo inolvidable.</strong></p>
        </div>
        <div className="hero-meta">
          <div><small>DESDE</small><strong>2024</strong></div>
          <div><small>PORTFOLIO</small><strong>+40 proyectos</strong></div>
          <div><small>NACIDOS EN</small><strong>Buenos Aires, AR</strong></div>
        </div>
        <div className="hero-actions"><a href="#portfolio">Ver proyectos <ArrowUpRight size={16} /></a><a href="#contacto">Empecemos algo grande <ArrowUpRight size={16} /></a></div>
      </section>

      <section id="servicios" className="services section-pad">
        <div className="section-index">01 — Cómo trabajamos</div>
        <div className="section-heading"><h2>Tres formas de<br />construir identidad<span>*</span></h2><p>No toda marca necesita lo mismo. Por eso en Popi trabajamos sobre <strong>tres líneas claras</strong>, cada una con su proceso. Vos elegís a partir de tu necesidad y nosotras armamos el sistema.</p></div>
        <div className="service-list">{services.map((service) => <a className="service-card" href="#contacto" key={service.number}><div className="service-top"><span>LÍNEA {service.number}</span><span>{service.duration}</span></div><h3>{service.title}</h3><p>{service.description}</p><span className="arrow-label">Ver más <MoveUpRight size={15} /></span></a>)}</div>
      </section>

      <section id="portfolio" className="portfolio section-pad">
        <div className="section-index">02 — Trabajos destacados</div>
        <div className="portfolio-heading"><h2>Nuestros proyectos<span>*</span></h2><p>Una selección de identidades pensadas para quedarse en la memoria.</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project" key={project.name}><div className={`project-image ${project.tone}`}>{images[index] ? <img src={images[index]} alt={`Proyecto ${project.name}`} /> : <div className="placeholder"><span>Arrastrá tu imagen aquí</span><small>/resources</small></div>}<span className="project-number">0{index + 1}</span></div><div className="project-caption"><h3>{project.name}</h3><span>{project.type}</span></div></article>)}</div>
      </section>

      <section id="studio" className="manifesto section-pad"><div className="section-index">03 — El estudio</div><h2>Ideas con <em>carácter.</em><br />Marcas con <span>alma.</span></h2><p>Somos un estudio independiente de branding y dirección creativa. Trabajamos cerca, pensamos profundo y hacemos que cada decisión tenga sentido.</p></section>

      <footer id="contacto" className="footer section-pad"><div className="footer-top"><span className="footer-brand">popi<span>*</span></span><a href="mailto:hola@popistudio.ar">hola@popistudio.ar <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>Buenos Aires — ARG</span><span>© 2024 Popi Studio</span><a href="#top">Volver arriba ↑</a></div></footer>
    </main>
  )
}

export { getResourceImages }

export const metadata = undefined
