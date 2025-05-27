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
                            <li><Link href="/">In�cio</Link></li>
                            <li><Link href="/sobre">Sobre</Link></li>
                            <li><Link href="/contato">Contato</Link></li>
                            <li><Link href="/login" className="btn-login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <div className="container">
                    <h2>Termos de Uso e Pol�tica de Privacidade</h2>
                    <p>
                        Seja bem-vindo ao <strong>ConectaVagas</strong> ? Encontre talentos, encontre futuro.<br />
                        Esta plataforma, desenvolvida no contexto do curso de Ci�ncia da Computa��o ? Bacharelado, tem como
                        objetivo facilitar a integra��o entre empresas e candidatos no mercado de trabalho por meio de
                        tecnologia, intelig�ncia artificial e geolocaliza��o.<br />
                        Ao acessar ou utilizar o ConectaVagas, voc� concorda com os termos e condi��es a seguir.
                    </p>
                    <br />
                    <h3>1. Defini��es</h3>
                    <ul>
                        <li><strong>Usu�rio:</strong> Pessoa f�sica (candidato) ou jur�dica (empresa) cadastrada na plataforma.</li>
                        <li><strong>ConectaVagas:</strong> Web App que promove a conex�o entre empresas e candidatos.</li>
                        <li><strong>IA:</strong> Mecanismos de intelig�ncia artificial utilizados para an�lise de perfil,
                            recomenda��o de vagas e curr�culos, entre outros.</li>
                        <li><strong>Dados Pessoais:</strong> Qualquer informa��o que possa identificar direta ou indiretamente
                            um usu�rio.</li>
                    </ul>
                    <br />
                    <h3>2. Coleta e Uso de Dados</h3>
                    <p>
                        Ao se cadastrar, voc� nos fornece informa��es pessoais e profissionais, como nome, e-mail, localiza��o,
                        curr�culo, CNPJ (no caso de empresas), entre outras.<br />
                        Os dados s�o utilizados para:
                    </p>
                    <ul>
                        <li>Gerar recomenda��es personalizadas com base em IA;</li>
                        <li>Sugerir vagas e candidatos com base na localiza��o;</li>
                        <li>Viabilizar a comunica��o entre empresas e candidatos;</li>
                        <li>Melhorar a experi�ncia do usu�rio por meio de an�lises e melhorias cont�nuas da plataforma.</li>
                    </ul>
                    <br />
                    <h3>3. Compartilhamento de Dados</h3>
                    <p>
                        O ConectaVagas n�o vende nem compartilha seus dados com terceiros sem seu consentimento, exceto:
                    </p>
                    <ul>
                        <li>Quando exigido por lei ou decis�o judicial;</li>
                        <li>Para parceiros educacionais ou empresas contratantes vinculadas a trilhas de desenvolvimento, sempre
                            de forma anonimizada ou mediante autoriza��o expressa do usu�rio.</li>
                    </ul>
                    <br />
                    <h3>4. Seguran�a</h3>
                    <p>
                        Implementamos medidas de seguran�a t�cnicas e organizacionais para proteger seus dados contra acesso n�o
                        autorizado, perda, altera��o ou destrui��o. A comunica��o entre o navegador e nossos servidores �
                        criptografada.
                    </p>
                    <br />
                    <h3>5. Responsabilidades do Usu�rio</h3>
                    <ul>
                        <li>Fornecer informa��es verdadeiras e atualizadas;</li>
                        <li>N�o utilizar a plataforma para fins il�citos ou prejudiciais;</li>
                        <li>Manter a confidencialidade de suas credenciais de acesso;</li>
                        <li>Respeitar os demais usu�rios e os termos aqui descritos.</li>
                    </ul>
                    <br />
                    <h3>6. Direitos do Usu�rio</h3>
                    <p>Voc� pode, a qualquer momento:</p>
                    <ul>
                        <li>Acessar seus dados pessoais;</li>
                        <li>Corrigir informa��es incorretas;</li>
                        <li>Excluir sua conta;</li>
                        <li>Solicitar a exclus�o dos seus dados da base do ConectaVagas, conforme a Lei Geral de Prote��o de
                            Dados (LGPD).</li>
                    </ul>
                    <br />
                    <h3>7. Cookies e Tecnologias de Rastreamento</h3>
                    <p>
                        Utilizamos cookies e tecnologias semelhantes para melhorar a navega��o e fornecer funcionalidades
                        personalizadas, como salvar prefer�ncias de idioma, lembrar seu login e gerar estat�sticas de uso da
                        plataforma.
                    </p>
                    <br />
                    <h3>8. Altera��es nesta Pol�tica</h3>
                    <p>
                        Esta pol�tica pode ser alterada periodicamente. Recomendamos que voc� a revise com frequ�ncia.
                        Altera��es significativas ser�o comunicadas por meio do e-mail cadastrado ou alertas na plataforma.
                    </p>
                    <br />
                    <h3>9. Contato</h3>
                    <p>
                        Para d�vidas, sugest�es ou solicita��es relacionadas � privacidade ou aos termos de uso, entre em
                        contato pelo e-mail: <Link href="mailto:contato@conectavagas.com">contato@conectavagas.com</Link>.
                    </p>

                    <p style={{ marginTop: 32, fontWeight: 500 }}>
                        ConectaVagas ? Unindo oportunidades e talentos com tecnologia, �tica e acessibilidade.
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
                            <h3>Links R�pidos</h3>
                            <ul>
                                <li><Link href="/">In�cio</Link></li>
                                <li><Link href="/sobre">Sobre</Link></li>
                                <li><Link href="/contato">Contato</Link></li>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/cadastro">Cadastre-se</Link></li>
                                <li><Link href="/termos_privacidade">Termos de Uso e Pol�tica de Privacidade</Link></li>
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