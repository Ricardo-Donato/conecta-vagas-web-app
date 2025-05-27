import Link from "next/link";
import termosStyle from "@/styles/Termos.module.css";

export default function Termos() {
    return (
        <>
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
                <div className="container">
                    <h2>Termos de Uso e Política de Privacidade</h2>
                    <p>
                        Seja bem-vindo ao <strong>ConectaVagas</strong> ? Encontre talentos, encontre futuro.<br />
                        Esta plataforma, desenvolvida no contexto do curso de Ciência da Computação ? Bacharelado, tem como
                        objetivo facilitar a integração entre empresas e candidatos no mercado de trabalho por meio de
                        tecnologia, inteligência artificial e geolocalização.<br />
                        Ao acessar ou utilizar o ConectaVagas, você concorda com os termos e condições a seguir.
                    </p>
                    <br />
                    <h3>1. Definições</h3>
                    <ul>
                        <li><strong>Usuário:</strong> Pessoa física (candidato) ou jurídica (empresa) cadastrada na plataforma.</li>
                        <li><strong>ConectaVagas:</strong> Web App que promove a conexão entre empresas e candidatos.</li>
                        <li><strong>IA:</strong> Mecanismos de inteligência artificial utilizados para análise de perfil,
                            recomendação de vagas e currículos, entre outros.</li>
                        <li><strong>Dados Pessoais:</strong> Qualquer informação que possa identificar direta ou indiretamente
                            um usuário.</li>
                    </ul>
                    <br />
                    <h3>2. Coleta e Uso de Dados</h3>
                    <p>
                        Ao se cadastrar, você nos fornece informações pessoais e profissionais, como nome, e-mail, localização,
                        currículo, CNPJ (no caso de empresas), entre outras.<br />
                        Os dados são utilizados para:
                    </p>
                    <ul>
                        <li>Gerar recomendações personalizadas com base em IA;</li>
                        <li>Sugerir vagas e candidatos com base na localização;</li>
                        <li>Viabilizar a comunicação entre empresas e candidatos;</li>
                        <li>Melhorar a experiência do usuário por meio de análises e melhorias contínuas da plataforma.</li>
                    </ul>
                    <br />
                    <h3>3. Compartilhamento de Dados</h3>
                    <p>
                        O ConectaVagas não vende nem compartilha seus dados com terceiros sem seu consentimento, exceto:
                    </p>
                    <ul>
                        <li>Quando exigido por lei ou decisão judicial;</li>
                        <li>Para parceiros educacionais ou empresas contratantes vinculadas a trilhas de desenvolvimento, sempre
                            de forma anonimizada ou mediante autorização expressa do usuário.</li>
                    </ul>
                    <br />
                    <h3>4. Segurança</h3>
                    <p>
                        Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não
                        autorizado, perda, alteração ou destruição. A comunicação entre o navegador e nossos servidores é
                        criptografada.
                    </p>
                    <br />
                    <h3>5. Responsabilidades do Usuário</h3>
                    <ul>
                        <li>Fornecer informações verdadeiras e atualizadas;</li>
                        <li>Não utilizar a plataforma para fins ilícitos ou prejudiciais;</li>
                        <li>Manter a confidencialidade de suas credenciais de acesso;</li>
                        <li>Respeitar os demais usuários e os termos aqui descritos.</li>
                    </ul>
                    <br />
                    <h3>6. Direitos do Usuário</h3>
                    <p>Você pode, a qualquer momento:</p>
                    <ul>
                        <li>Acessar seus dados pessoais;</li>
                        <li>Corrigir informações incorretas;</li>
                        <li>Excluir sua conta;</li>
                        <li>Solicitar a exclusão dos seus dados da base do ConectaVagas, conforme a Lei Geral de Proteção de
                            Dados (LGPD).</li>
                    </ul>
                    <br />
                    <h3>7. Cookies e Tecnologias de Rastreamento</h3>
                    <p>
                        Utilizamos cookies e tecnologias semelhantes para melhorar a navegação e fornecer funcionalidades
                        personalizadas, como salvar preferências de idioma, lembrar seu login e gerar estatísticas de uso da
                        plataforma.
                    </p>
                    <br />
                    <h3>8. Alterações nesta Política</h3>
                    <p>
                        Esta política pode ser alterada periodicamente. Recomendamos que você a revise com frequência.
                        Alterações significativas serão comunicadas por meio do e-mail cadastrado ou alertas na plataforma.
                    </p>
                    <br />
                    <h3>9. Contato</h3>
                    <p>
                        Para dúvidas, sugestões ou solicitações relacionadas à privacidade ou aos termos de uso, entre em
                        contato pelo e-mail: <Link href="mailto:contato@conectavagas.com">contato@conectavagas.com</Link>.
                    </p>

                    <p style={{ marginTop: 32, fontWeight: 500 }}>
                        ConectaVagas ? Unindo oportunidades e talentos com tecnologia, ética e acessibilidade.
                    </p>
                </div>
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
                                <li><Link href="/">Início</Link></li>
                                <li><Link href="/sobre">Sobre</Link></li>
                                <li><Link href="/contato">Contato</Link></li>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/cadastro">Cadastre-se</Link></li>
                                <li><Link href="/termos_privacidade">Termos de Uso e Política de Privacidade</Link></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Contato</h3>
                            <p><i className="fas fa-envelope"></i> contato@conectavagas.com</p>
                            <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
                            <div className={`${termosStyle["social-media"]} ${termosStyle.rodapeSocial}`}>
                                <Link href="#"><i className="fab fa-facebook"></i></Link>
                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                                <Link href="#"><i className="fab fa-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 ConectaVagas. Todos os direitos reservados.</p>
                        <p>Projeto desenvolvido por Pedro Ricardo Donato da Silva</p>
                    </div>
                </div>
            </footer>
        </>
    );
}