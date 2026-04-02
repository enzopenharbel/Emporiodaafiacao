import React, { useEffect, useMemo, useState } from "react";
import { Menu, Scissors, Search, Star, Wrench, X } from "lucide-react";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "Afiações",
    description: "Serviço principal com corte preciso e acabamento profissional.",
    icon: Scissors,
  },
  {
    title: "Venda de Produtos",
    description: "Acessórios e ferramentas selecionadas para manicure.",
    icon: Wrench,
  },
  {
    title: "Gravações",
    description: "Personalização profissional de instrumentos.",
    icon: Star,
  },
  {
    title: "Troca de Molas",
    description: "Manutenção completa para prolongar a vida útil do alicate.",
    icon: Wrench,
  },
];
const products = [
  {
    name: "Alicate Profissional",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tesoura Profissional",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kit Manicure",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Espátulas e Acessórios",
    img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80",
  },
];

const banners = [
  "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
];

const reviews = [
  { name: "Juliana S.", text: "Serviço excelente! Meu alicate ficou novo." },
  { name: "Carlos M.", text: "Atendimento rápido e profissional. Recomendo." },
  { name: "Fernanda P.", text: "Ótimo trabalho, volto sempre." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filtered = useMemo(() => {
    return services.filter((s) =>
      s.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const whatsappLink =
    "https://wa.me/5511979626107?text=Olá,%20quero%20fazer%20uma%20afiação";

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Empório da Afiação | Afiação Profissional em São Paulo</title>
        <meta
          name="description"
          content="Afiação profissional de alicates, tesouras, espátulas e facas em São Paulo. Troca de molas e venda de acessórios para manicure."
        />
        <meta
          name="keywords"
          content="afiação de alicate, afiação manicure, afiar tesoura, troca de molas, acessórios manicure, São Paulo"
        />
      </Helmet>

      <div className="site">
        <header className="header">
          <div className="container nav">
            <div className="brand">
              <div className="brand-mark">✦</div>
              <div>
                <div className="brand-title">Empório da Afiação</div>
                <div className="brand-subtitle">Afiação profissional e acessórios</div>
              </div>
            </div>

            <nav className="nav-links desktop-only">
              <button onClick={() => handleScroll("inicio")}>Início</button>
              <button onClick={() => handleScroll("servicos")}>Serviços</button>
              <button onClick={() => handleScroll("produtos")}>Produtos</button>
              <button onClick={() => handleScroll("avaliacoes")}>Avaliações</button>
              <button onClick={() => handleScroll("contato")}>Contato</button>
            </nav>

            <a className="btn btn-gold desktop-only" href={whatsappLink} target="_blank" rel="noreferrer">
              Solicitar atendimento
            </a>

            <button className="menu-btn mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-menu mobile-only">
              <button onClick={() => handleScroll("inicio")}>Início</button>
              <button onClick={() => handleScroll("servicos")}>Serviços</button>
              <button onClick={() => handleScroll("produtos")}>Produtos</button>
              <button onClick={() => handleScroll("avaliacoes")}>Avaliações</button>
              <button onClick={() => handleScroll("contato")}>Contato</button>
            </div>
          )}
        </header>

        <main>
          <section id="inicio" className="hero container">
            <div className="hero-copy">
              <span className="eyebrow">Especialistas em afiação profissional</span>
              <h1>Empório da Afiação</h1>
              <p>
                Afiação de alicates, tesouras, espátulas e facas, troca de molas e
                venda de acessórios para manicure em São Paulo.
              </p>

              <ul className="hero-list">
                <li>Alicates e tesouras com corte preciso</li>
                <li>Atendimento profissional e rápido</li>
                <li>Contato direto pelo WhatsApp</li>
              </ul>

              <div className="hero-actions">
                <a className="btn btn-gold" href={whatsappLink} target="_blank" rel="noreferrer">
                  Chamar no WhatsApp
                </a>
                <button className="btn btn-dark" onClick={() => handleScroll("servicos")}>
                  Ver serviços
                </button>
              </div>
            </div>

            <div className="hero-banner">
              <img src={banners[bannerIndex]} alt="Banner Empório da Afiação" />
              <div className="hero-dots">
                {banners.map((_, i) => (
                  <button
                    key={i}
                    className={i === bannerIndex ? "dot active" : "dot"}
                    onClick={() => setBannerIndex(i)}
                    aria-label={`Ir para banner ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="search-section container">
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Pesquisar serviços..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </section>

          <section id="servicos" className="section container">
            <div className="section-heading">
              <h2>Serviços</h2>
              <p>Precisão, acabamento e manutenção para uso profissional.</p>
            </div>

            <div className="card-grid services-grid">
              {filtered.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="card service-card" key={index}>
                    <div className="icon-wrap">
                      <Icon size={24} />
                    </div>
                    <h3>{service.title}</h3>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="produtos" className="section container">
            <div className="section-heading">
              <h2>Acessórios para manicure</h2>
              <p>Itens selecionados para profissionais da beleza.</p>
            </div>

            <div className="card-grid products-grid">
              {products.map((product, index) => (
                <article className="product-card" key={index}>
                  <img src={product.img} alt={product.name} />
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <a className="btn btn-gold small" href={whatsappLink} target="_blank" rel="noreferrer">
                      Ver produto
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="avaliacoes" className="section container">
            <div className="reviews-header">
              <h2>Depoimentos dos nossos clientes</h2>
              <div className="rating">
                <strong>4.4</strong>
                <span className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </span>
                <span>Google</span>
              </div>
            </div>

            <div className="reviews-list">
              {reviews.map((review, index) => (
                <article className="review-item" key={index}>
                  <p>“{review.text}”</p>
                  <span>— {review.name}</span>
                </article>
              ))}
            </div>
          </section>

          <section id="contato" className="section container contact-section">
            <div className="section-heading">
              <h2>Contato</h2>
              <p>Fale direto conosco para orçamento e atendimento.</p>
            </div>
            <div className="contact-box">
              <p><strong>WhatsApp:</strong> (11) 9 7962-6107</p>
              <p><strong>Cidade:</strong> São Paulo - SP</p>
              <a className="btn btn-gold" href={whatsappLink} target="_blank" rel="noreferrer">
                Falar agora
              </a>
            </div>
          </section>
        </main>

        <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <h3>Empório da Afiação</h3>
              <p>
                Especialistas em afiação profissional de instrumentos para manicure.
              </p>
            </div>

            <div>
              <h4>Navegação</h4>
              <ul>
                <li><button onClick={() => handleScroll("inicio")}>Início</button></li>
                <li><button onClick={() => handleScroll("servicos")}>Serviços</button></li>
                <li><button onClick={() => handleScroll("produtos")}>Produtos</button></li>
                <li><button onClick={() => handleScroll("avaliacoes")}>Avaliações</button></li>
              </ul>
            </div>

            <div>
              <h4>Contato</h4>
              <ul>
                <li>📞 (11) 9 7962-6107</li>
                <li>📍 São Paulo - SP</li>
                <li>🕐 Seg a Sex: 9h às 18h</li>
              </ul>
            </div>

            <div>
              <h4>Atendimento</h4>
              <p>Fale direto conosco pelo WhatsApp.</p>
              <a className="btn btn-green" href={whatsappLink} target="_blank" rel="noreferrer">
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="copyright">
            © {new Date().getFullYear()} Empório da Afiação - Todos os direitos reservados
          </div>
        </footer>
      </div>
    </>
  );
}
