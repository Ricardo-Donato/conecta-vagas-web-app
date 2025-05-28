import Link from "next/link";
import StyleIndex from "@/styles/Home.module.css";

export default function Home() {
  return (<>
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <h1>ConectaVagas</h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/login" className="btn-login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Encontre oportunidades ideais ou talentos excepcionais!</h2>
            <p>Conectamos candidatos e empresas de forma inteligente, utilizando IA para criar as melhores
              combinações.</p>
            <div className="hero-buttons">
              <a href="Pages/cadastro?tipo=candidato" className="btn btn-primary">Sou Candidato</a>
              <a href="Pages/cadastro?tipo=empresa" className="btn btn-secondary">Sou Empresa</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              <img src="Images/hero-image.png" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2>Recursos em Destaque</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>Sugestões personalizadas por IA</h3>
              <p>Nossa inteligência artificial analisa seu perfil e recomenda as melhores oportunidades.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Vagas próximas à sua localização</h3>
              <p>Encontre oportunidades perto de você, economizando tempo e recursos no deslocamento.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Parcerias com instituições de ensino</h3>
              <p>Acesse trilhas de desenvolvimento profissional com nossos parceiros educacionais.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="container">
          <h2>Como Funciona</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Cadastre-se</h3>
              <p>Crie sua conta como candidato ou empresa em poucos minutos.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Complete seu perfil</h3>
              <p>Adicione informações detalhadas para melhores recomendações.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Receba recomendações</h3>
              <p>Nossa IA encontrará as melhores combinações para você.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h2>Depoimentos</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Consegui meu emprego dos sonhos em apenas duas semanas após me cadastrar. As
                  recomendações foram perfeitas!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="author-info">
                  <h4>Ana Silva</h4>
                  <p>Desenvolvedora Web</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Como empresa, encontramos candidatos qualificados rapidamente. O sistema de IA realmente
                  entende nossas necessidades."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="author-info">
                  <h4>Carlos Mendes</h4>
                  <p>Recrutador, TechSolutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>ConectaVagas</h2>
            <p>Encontre talentos, encontre futuro</p>
          </div>
          <div className="footer-links">
            <h3>Links Rápidos</h3>
            <ul>
              {/* <li><a href="Pages/sobre">Sobre</a></li> */}
              <li><Link href="/sobre">Sobre</Link></li>
              <li><a href="Pages/contato">Contato</a></li>
              <li><a href="Pages/login">Login</a></li>
              <li><a href="Pages/cadastro">Cadastre-se</a></li>
              <li><a href="Pages/termos_privacidade">Termos de Uso e Política de Privacidade</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contato</h3>
            <p><i className="fas fa-envelope"></i> contato@conectavagas.com</p>
            <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
            <div className="social-media">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ConectaVagas. Todos os direitos reservados.</p>
          <p>Projeto desenvolvido por Pedro Ricardo Donato da Silva</p>
        </div>
      </div>
    </footer>
  </>);
}
