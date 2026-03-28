import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80",
    titleTop: "Especialistas em",
    titleBottom: "Afiação Profissional",
    subtitle: "Alicates, Tesouras, Espátulas e Facas",
    button: "Saiba Mais",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80",
    titleTop: "Precisão para",
    titleBottom: "Manicures e Salões",
    subtitle: "Serviços especializados e acessórios selecionados",
    button: "Fale Conosco",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
    titleTop: "Qualidade em",
    titleBottom: "Cada Detalhe",
    subtitle: "Afiação, manutenção e atendimento profissional",
    button: "Pedir Orçamento",
  },
];

const serviceCards = [
  {
    title: "Afiação de Alicates",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Afiação de Tesouras",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Afiação de Espátulas",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Afiação de Facas",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=900&q=80",
  },
];

const products = [
  {
    title: "Alicate Mundial 722",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Kit Manicure Mundial",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lixa Bloco 4 Faces",
    image:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  { text: "Serviço excelente! Meu alicate ficou novo.", author: "Juliana S." },
  { text: "Atendimento rápido e profissional. Recomendo!", author: "Carlos M." },
  { text: "Ótimo trabalho, volto sempre!", author: "Fernanda P." },
];

export default function App() {
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState("");
  const whatsapp =
    "https://wa.me/5511979626107?text=Olá,%20quero%20fazer%20uma%20afiação";

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const filteredServices = serviceCards.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Empório da Afiação | Afiação Profissional</title>
        <meta
          name="description"
          content="Afiação profissional de alicates, tesouras, espátulas e facas. Troca de molas e acessórios para manicure em São Paulo."
        />
        <meta
          name="keywords"
          content="afiação de alicate, afiação profissional, manicure, tesoura, espátula, faca, São Paulo"
        />
      </Helmet>

      <div className="page-shell">
        <header className="topbar">
          <div className="container nav-row">
            <div className="brand">
              <div className="brand-icon">
                <span className="brand-blade" />
                <span className="brand-blade small" />
              </div>
              <div className="brand-text">
                <strong>EMPÓRIO</strong>
                <span>DA AFIAÇÃO</span>
              </div>
            </div>

            <nav className="main-nav">
              <a href="#inicio" className="active">Início</a>
              <a href="#servicos">Serviços</a>
              <a href="#produtos">Produtos</a>
              <a href="#depoimentos">Depoimentos</a>
              <a href="#contato">Contato</a>
            </nav>

            <div className="nav-search">
              <input
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="search-icon">⌕</span>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="inicio">
            <div className="hero-image-wrap">
              <img
                src={heroSlides[slide].image}
                alt="Afiação profissional"
                className="hero-image"
              />
              <div className="hero-overlay" />
              <button
                className="hero-arrow left"
                onClick={() =>
                  setSlide((slide - 1 + heroSlides.length) % heroSlides.length)
                }
                aria-label="Slide anterior"
              >
                ‹
              </button>
              <button
                className="hero-arrow right"
                onClick={() => setSlide((slide + 1) % heroSlides.length)}
                aria-label="Próximo slide"
              >
                ›
              </button>

              <div className="hero-content">
                <p className="hero-title-top">{heroSlides[slide].titleTop}</p>
                <h1>{heroSlides[slide].titleBottom}</h1>
                <div className="hero-divider" />
                <p className="hero-subtitle">{heroSlides[slide].subtitle}</p>
                <a href="#produtos" className="gold-button hero-button">
                  {heroSlides[slide].button}
                </a>
              </div>

              <div className="hero-dots">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    className={index === slide ? "dot active" : "dot"}
                    onClick={() => setSlide(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="services-strip container" id="servicos">
            {filteredServices.map((item) => (
              <article className="service-tile" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="service-tile-overlay" />
                <h3>{item.title}</h3>
              </article>
            ))}
          </section>

          <section className="section container" id="produtos">
            <div className="section-title">
              <span className="line" />
              <h2>Acessórios para Manicure</h2>
              <span className="line" />
            </div>

            <div className="product-grid">
              {products.map((item) => (
                <article className="product-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div className="product-card-body">
                    <h3>{item.title}</h3>
                    <a className="gold-button small" href={whatsapp} target="_blank" rel="noreferrer">
                      Ver Produto
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section testimonials container" id="depoimentos">
            <div className="testimonial-header">
              <span className="line" />
              <h2>Depoimentos dos Nossos Clientes</h2>
              <div className="rating-box">
                <strong>4.4</strong>
                <span>★★★★★</span>
                <small>Google</small>
              </div>
            </div>

            <div className="testimonial-list">
              {testimonials.map((item) => (
                <article className="testimonial-row" key={item.author}>
                  <span className="quote">“</span>
                  <p>{item.text}</p>
                  <strong>{item.author}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="contact-strip container" id="contato">
            <div className="contact-box">
              <h2>Entre em Contato</h2>
              <p>WhatsApp: (11) 9 7962-6107</p>
              <p>São Paulo - SP</p>
              <a className="gold-button" href={whatsapp} target="_blank" rel="noreferrer">
                Solicitar Atendimento
              </a>
            </div>
          </section>
        </main>

        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp"
        >
          <span className="wa-icon">◔</span>
          Fale Conosco
        </a>

        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <h3>Empório da Afiação</h3>
              <p>Afiação profissional, troca de molas e acessórios para manicure.</p>
            </div>
            <div>
              <h4>Navegação</h4>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>(11) 9 7962-6107</li>
                <li>São Paulo - SP</li>
                <li>Seg a Sex: 9h às 18h</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
