import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

const destinations = [
  {
    title: "Cultura",
    text: "Descubre la esencia de Japón.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Experiencias",
    text: "Vive momentos únicos.",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Gastronomía",
    text: "Sabores que enamoran.",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Destinos",
    text: "3 ciudades, mil historias.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Inspírate",
    text: "Viaja, explora y conecta.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=700&q=85"
  }
];

const sections = [
  {
    id: "quienes-somos",
    icon: "◉",
    title: "¿QUIÉNES SOMOS?",
    text: "Somos un equipo apasionado por Japón y su cultura. Creamos experiencias auténticas, personalizadas y memorables para que vivas lo mejor del país del sol naciente.",
    image: "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "objetivos",
    icon: "◎",
    title: "OBJETIVOS",
    text: "• Crear experiencias de viaje únicas y personalizadas.\n• Promover un turismo responsable y sostenible.\n• Conectar a nuestros viajeros con la cultura local.\n• Brindar un servicio confiable, seguro y de calidad.",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "mision",
    icon: "△",
    title: "MISIÓN",
    text: "Inspirar y acompañar a nuestros viajeros a descubrir Japón de forma auténtica, segura y enriquecedora, creando recuerdos que duren toda la vida.",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "plan de proyecto",
    icon: "△",
    title: "PLAN DE PROYECTO",
    text: "Inspirar y acompañar a nuestros visitantes a descubrir lo que se puede hacer con IA y enriquecer los conocimientos.",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "proyecto",
    icon: "▢",
    title: "PROYECTO",
    text: "Diseñamos itinerarios que combinan cultura, aventura, gastronomía y descanso. Nuestro proyecto busca conectar personas con lugares extraordinarios y transformar cada viaje en una experiencia inolvidable.",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=85"
  }
];

function App() {
  return (
    <>
      <header className="hero">
        <nav className="nav container">
          <a className="brand" href="#inicio">◉ <span>EXPLORA LA IA</span></a>
          <div className="nav-links">
            <a href="#quienes-somos">Quiénes somos</a>
            <a href="#objetivos">Objetivos</a>
            <a href="#mision">Misión</a>
            <a href="#proyecto">Proyecto</a>
            <a href="#contactos">Contactos</a>
          </div>
          <a className="nav-button" href="#contactos">Contáctanos</a>
        </nav>

        <div className="hero-content container" id="inicio">
          <p className="eyebrow">DESCUBRE UNA NUEVA EXPERIENCIA</p>
          <h1>IA</h1>
          <p className="hero-copy">Que es, como usarla y modernidad en un solo destino.</p>
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
              <li><span>✉</span> hola@explorajapon.com</li>
              <li><span>☎</span> +57 300 123 4567</li>
              <li><span>⌖</span> Bogotá, Colombia</li>
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
          <div className="brand">◉ <span>EXPLORA JAPÓN</span></div>
          <p>© 2026 Explora Japón · Todos los derechos reservados</p>
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
