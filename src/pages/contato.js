import { useState } from "react";
import contatoStyle from "@/styles/Contato.module.css";
import { useRouter } from "next/router";

export default function Contato() {
    const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
    const [mensagemStatus, setMensagemStatus] = useState(null);
    const router = useRouter();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleContact(event) {
        event.preventDefault();

        console.log("Contact data:", formData);
        setMensagemStatus("Mensagem enviada com sucesso! Em breve entraremos em contato.");

        setTimeout(() => {
            router.push("/");
        }, 2500);
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <Link href="../index.html">
                            <h1>ConectaVagas</h1>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link href="../index.html">Início</Link></li>
                            <li><Link href="sobre.html">Sobre</Link></li>
                            <li><Link href="contato.html" className="active">Contato</Link></li>
                            <li><Link href="login.html" className="btn-login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div className="container">
                    {mensagemStatus && (
                        <div id="message-container" className="success">
                            {mensagemStatus}
                        </div>
                    )}
                    <form onSubmit={handleContact} className="contact-form" autoComplete="off">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="5"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Enviar Mensagem</button>
                    </form>
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
                                <li><Link href="../index.html">Início</Link></li>
                                <li><Link href="sobre.html">Sobre</Link></li>
                                <li><Link href="login.html">Login</Link></li>
                                <li><Link href="cadastro.html">Cadastre-se</Link></li>
                                <li><Link href="termos_privacidade.html">Termos de Uso e Política de Privacidade</Link></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Contato</h3>
                            <p><i className="fas fa-envelope"></i> contato@conectavagas.com</p>
                            <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
                            <div className="social-media rodape-social">
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