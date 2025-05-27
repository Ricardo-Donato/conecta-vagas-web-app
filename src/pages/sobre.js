import sobreStyle from "@/styles/Sobre.module.css";
import Link from "next/link";

export default function Sobre() {
    return (<>
        <header className={sobreStyle.header}>
            <div className="container">
                <div className="logo">
                    <Link href="../index.html">
                        <h1 className={sobreStyle.h1}>ConectaVagas</h1>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link href="../index.html">Início</Link></li>
                        <li><Link href="sobre.html">Sobre</Link></li>
                        <li><Link href="contato.html">Contato</Link></li>
                        <li><Link href="login.html" className="btn-login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main className={sobreStyle.main}>
            <div className="container">
                <h2 className={sobreStyle.h2}>Sobre o Projeto</h2>
                <p className={sobreStyle.p}>
                    Este projeto tem como objetivo facilitar a integração de pessoas no
                    ConectaVagas por meio de um Web App que disponibiliza o cadastro
                    de pessoas e empresas a fim de aproximar a comunicação entre o local de
                    trabalho e o candidato.
                </p>
                <p className={sobreStyle.p}>
                    Além disso, haverá a recomendação/sugestões tanto para empresas quanto
                    pessoas utilizando Inteligência Artificial (IA)/agentes de IA, como
                    também a integração de Web APIs para obter localização do usuário e
                    sugerir candidatos perto da empresa e vagas perto do candidato.
                </p>
                <p className={sobreStyle.p}>
                    Adiante, é possível transformar o projeto em um Micro SaaS ou até SaaS,
                    como também, a partir do conhecimento em React e React Native, a criação
                    de um aplicativo mobile.
                </p>
                <h2 className={sobreStyle.h2}>Paleta de Cores e Tipografia</h2>
                <ul>
                    <li>Cores Principais: Azul (confiança) + Verde (crescimento) + Branco (clean).</li>
                    <li>Tipografia: Fontes sem serifa (ex.: Inter ou Open Sans) para legibilidade.</li>
                </ul>
                <br />
                <h2 className={sobreStyle.h2}>Tecnologias Passíveis para Utilização</h2>
                <ul>
                    <li>Front-end: React (com Material-UI ou Chakra UI para componentes acessíveis).</li>
                    <li>Mapas: Google Maps API ou Mapbox.</li>
                    <li>IA: Integração com OpenAI (GPT para análise de texto) ou soluções pré-treinadas (ex.:
                        TensorFlow.js).</li>
                </ul>
            </div>
        </main>

        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2 className={sobreStyle.h2}>ConectaVagas</h2>
                        <p className={sobreStyle.p}>Encontre talentos, encontre futuro</p>
                    </div>
                    <div className="footer-links">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><Link href="../index.html">Início</Link></li>
                            <li><Link href="contato.html">Contato</Link></li>
                            <li><Link href="login.html">Login</Link></li>
                            <li><Link href="cadastro.html">Cadastre-se</Link></li>
                            <li><Link href="termos_privacidade.html">Termos de Uso e Política de Privacidade</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contato</h3>
                        <p className={sobreStyle.p}><i className="fas fa-envelope"></i> contato@conectavagas.com</p>
                        <p className={sobreStyle.p}><i className="fas fa-phone"></i> (11) 1234-5678</p>
                        <div className="social-media">
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                            <Link href="#"><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className={sobreStyle.p}>&copy; 2025 ConectaVagas. Todos os direitos reservados.</p>
                    <p className={sobreStyle.p}>Projeto desenvolvido por Pedro Ricardo Donato da Silva</p>
                </div>
            </div>
        </footer>
    </>
    );
}