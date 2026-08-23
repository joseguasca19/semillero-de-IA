import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

const destinations = [
  {
    title: "Investigación",
    text: "Generamos conocimiento aplicado en inteligencia artificial.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Formación",
    text: "Preparamos semilleristas en herramientas y modelos de IA.",
    image: "https://images.unsplash.com/photo-1758270705290-62b6294dd044?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Aplicaciones",
    text: "Algoritmos e IA al servicio de problemas reales.",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Proyectos",
    text: "Ideas que se convierten en prototipos funcionales.",
    image: "https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Divulgación",
    text: "Compartimos nuestros resultados con la comunidad académica.",
    image: "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?auto=format&fit=crop&w=700&q=85"
  }
];

const sections = [
  {
    id: "quienes-somos",
    icon: "◉",
    title: "¿QUIÉNES SOMOS?",
    text: "Somos el Semillero de Investigación con Inteligencia Artificial Aplicada (SIIA), conformado por estudiantes y docentes interesados en explorar los fundamentos, herramientas y aplicaciones de la IA en las matemáticas y otras áreas del conocimiento. Promovemos el aprendizaje colaborativo y el pensamiento científico.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "objetivos",
    icon: "◎",
    title: "OBJETIVOS",
    text: "• Fomentar la investigación en inteligencia artificial aplicada.\n• Desarrollar proyectos que integren la IA con las matemáticas y otras disciplinas.\n• Fortalecer las competencias investigativas de los semilleristas.\n• Divulgar los resultados obtenidos a la comunidad académica.",
    image: "https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "mision",
    icon: "△",
    title: "MISIÓN",
    text: "Impulsar la formación investigativa de nuestros integrantes mediante el estudio y la aplicación de la inteligencia artificial, generando soluciones innovadoras que aporten valor a la comunidad académica y a la sociedad.",
    image: "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "proyecto",
    icon: "▢",
    title: "PROYECTO",
    text: "Nuestro proyecto explora cómo la inteligencia artificial puede aplicarse a la resolución de problemas matemáticos y científicos, desarrollando prototipos, modelos y herramientas que evidencian su potencial dentro del proceso investigativo del semillero.",
    image: "https://images.unsplash.com/photo-1646583288948-24548aedffd8?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "plan-de-trabajo",
    icon: "△",
    title: "PLAN DE TRABAJO",
    text: "Organizamos nuestro trabajo en fases: exploración conceptual de la inteligencia artificial, formación técnica de los integrantes, desarrollo de proyectos aplicados y socialización de resultados, fortaleciendo así el proceso investigativo del semillero.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85"
  }
];

function App() {
  return (
    <>
      <header className="hero">
        <nav className="nav container">
          <a className="brand" href="#inicio">◉ <span>SIIA</span></a>
          <div className="nav-links">
            <a href="#quienes-somos">Quiénes somos</a>
            <a href="#objetivos">Objetivos</a>
            <a href="#mision">Misión</a>
            <a href="#proyecto">Proyecto</a>
            <a href="#plan-de-trabajo">Plan de trabajo</a>
            <a href="#contactos">Contactos</a>
          </div>
          <a className="nav-button" href="#contactos">Contáctanos</a>
        </nav>

        <div className="hero-content container" id="inicio">
          <p className="eyebrow">SEMILLERO DE INVESTIGACIÓN</p>
          <h1>SIIA</h1>
          <p className="hero-copy">Semillero de investigación con inteligencia artificial aplicada: qué es, cómo se usa y su impacto en la actualidad.</p>
        </div>

        <div className="socials" aria-label="Redes sociales">
          <a href="#contactos">◎</a>
          <a href="#contactos">f</a>
          <a href="#contactos">◌</a>
        </div>

        <div className="destination-grid container">
          {destinations.map((item) => (
            <article className="destination-card" key={item.title} style={{backgroundImage: `linear-gradient(to top, rgba(5,8,10,.95), rgba(5,8,10,.08)), url(${item.image})`}}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </header>

      <main className="main">
        <div className="container">
          {sections.map((section) => (
            <section className="info-section" id={section.id} key={section.id}>
              <div className="info-icon">{section.icon}</div>
              <div className="info-copy">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
              <div className="info-image" style={{backgroundImage: `url(${section.image})`}} />
            </section>
          ))}
        </div>
      </main>

      <section className="contact-section" id="contactos">
        <div className="container contact-layout">
          <div className="contact-info">
            <p className="eyebrow">ESTAMOS PARA AYUDARTE</p>
            <h2>CONTACTOS</h2>
            <div className="gold-line"></div>
            <ul>
              <li><span>✉</span> siia@investigacion.edu.co</li>
              <li><span>☎</span> +57 300 123 4567</li>
              <li><span>⌖</span> Popayán, Cauca, Colombia</li>
              <li><span>◷</span> Lun – Vie: 9:00 a.m. – 6:00 p.m.</li>
            </ul>
            <p className="follow">Síguenos en nuestras redes</p>
            <div className="social-row">
              <a href="#inicio">◎</a><a href="#inicio">f</a><a href="#inicio">▶</a><a href="#inicio">♪</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("¡Gracias! Tu mensaje ha sido enviado."); }}>
            <h3>Escríbenos</h3>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="text" placeholder="Asunto" required />
            <textarea placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="brand">◉ <span>SIIA</span></div>
          <p>© 2026 Semillero de Investigación con IA Aplicada · Todos los derechos reservados</p>
          <div className="footer-links">
            <a href="#quienes-somos">Nosotros</a>
            <a href="#proyecto">Proyecto</a>
            <a href="#contactos">Contacto</a>
          </div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
