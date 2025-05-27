import contatoStyle from "@/styles/Contato.module.css";

export default function Contato() {
    return (<>
        <header>
            <div class="container">
                <div class="logo">
                    <a href="../index.html">
                        <h1>ConectaVagas</h1>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="../index.html">Início</a></li>
                        <li><a href="sobre.html">Sobre</a></li>
                        <li><a href="contato.html" class="active">Contato</a></li>
                        <li><a href="login.html" class="btn-login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <div class="container">
                <div id="message-container"></div>
                <div class="contact-container">
                    <div class="contact-header">
                        <h2>Entre em Contato</h2>
                        <p>Fale conosco! Estamos prontos para ajudar você.</p>
                    </div>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> <a
                                href="mailto:contato@conectavagas.com">contato@conectavagas.com</a></p>
                        <p><i class="fas fa-phone"></i> <a href="tel:1112345678">(11) 1234-5678</a></p>
                        <div class="social-media">
                            <a href="#" title="Facebook" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="#" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="#" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="#" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <form id="contact-form" class="contact-form" autocomplete="off">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome" required/>

                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Seu e-mail" required/>

                        <label for="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" rows="5" placeholder="Digite sua mensagem"
                            required>
                        </textarea>

                        <button type="submit">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </main>

        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-logo">
                        <h2>ConectaVagas</h2>
                        <p>Encontre talentos, encontre futuro</p>
                    </div>
                    <div class="footer-links">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><a href="../index.html">Início</a></li>
                            <li><a href="sobre.html">Sobre</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="cadastro.html">Cadastre-se</a></li>
                            <li><a href="termos_privacidade.html">Termos de Uso e Política de Privacidade</a></li>
                        </ul>
                    </div>
                    <div class="footer-contact">
                        <h3>Contato</h3>
                        <p><i class="fas fa-envelope"></i> contato@conectavagas.com</p>
                        <p><i class="fas fa-phone"></i> (11) 1234-5678</p>
                        <div class="social-media rodape-social">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 ConectaVagas. Todos os direitos reservados.</p>
                    <p>Projeto desenvolvido por Pedro Ricardo Donato da Silva</p>
                </div>
            </div>
        </footer>
    </>
    );
}

// src/pages/contato.js
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
            router.push("/"); // Redireciona para a home
        }, 2500);
    }

    return (
        <>
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
        </>
    );
}