import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MessageContainer from "@/components/MessageContainer";
import contatoStyle from "@/styles/Contato.module.css";

export default function Contato() {
    const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const router = useRouter();

    // Função que imita o showMessage original de HTML e JavaScript
    const showMessage = useCallback((type, texto) => {
        setMessageType(type);
        setMessage(texto);
    }, []);

    // Limpa a mensagem (passado para MessageContainer)
    const clearMessage = useCallback(() => {
        setMessage("");
        setMessageType("");
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContact = (e) => {
        e.preventDefault();
        const dados = new FormData(e.target);
        const obj = Object.fromEntries(dados.entries());

        showMessage("success", "Mensagem enviada com sucesso! Em breve entraremos em contato.");

        setTimeout(() => {
            router.push("/");
        }, 2500);
    };
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
                            <li><Link href="/contato" className="active">Contato</Link></li>
                            <li><Link href="/login" className="btn-login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* renderiza a mensagem */}
            {message && (
                <MessageContainer
                    type={messageType}
                    message={message}
                    onClear={clearMessage}
                />
            )}
            <main className={contatoStyle.main}>
                <div className={contatoStyle["contact-container"]}>
                    <div className={contatoStyle["contact-header"]}>
                        <h2>Entre em Contato</h2>
                        <p>Fale conosco! Estamos prontos para ajudar você.</p>
                    </div>
                    <div className={contatoStyle["contact-info"]}>
                        <p><i className="fas fa-envelope"></i> <Link href="mailto:contato@conectavagas.com">contato@conectavagas.com</Link></p>
                        <p><i className="fas fa-phone"></i> <Link href="tel:1112345678">(11) 1234-5678</Link></p>
                        <div className={contatoStyle["social-media"]}>
                            <Link href="#" title="Facebook" target="_blank"><i className="fab fa-facebook"></i></Link>
                            <Link href="#" title="Twitter" target="_blank"><i className="fab fa-twitter"></i></Link>
                            <Link href="#" title="Instagram" target="_blank"><i className="fab fa-instagram"></i></Link>
                            <Link href="#" title="LinkedIn" target="_blank"><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                    <form onSubmit={handleContact} className={contatoStyle["contact-form"]} autoComplete="off">
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
                                <li><Link href="/">Início</Link></li>
                                <li><Link href="/sobre">Sobre</Link></li>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/cadastro">Cadastre-se</Link></li>
                                <li><Link href="/termos_privacidade">Termos de Uso e Política de Privacidade</Link></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Contato</h3>
                            <p><i className="fas fa-envelope"></i> contato@conectavagas.com</p>
                            <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
                            <div className={`${contatoStyle["social-media"]} ${contatoStyle.rodapeSocial}`}>
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