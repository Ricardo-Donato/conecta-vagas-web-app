import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MessageContainer from "@/components/MessageContainer";
import loginStyle from "@/styles/Login.module.css";

function isValidEmail(email) {
    // Validação simples de e-mail
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Login() {
    const [userType, setUserType] = useState("candidato");
    const [formData, setFormData] = useState({ email: "", senha: "" });
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const router = useRouter();

    const handleUserType = (type) => {
        setUserType(type);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    function validateLoginData(data) {
        let isValid = true;
        const errors = [];

        if (!data.email || !isValidEmail(data.email)) {
            errors.push("E-mail inválido");
            isValid = false;
        }
        if (!data.senha) {
            errors.push("Senha é obrigatória");
            isValid = false;
        }
        if (!isValid) {
            setMessageType("error");
            setMessage(errors.join(" | "));
        }
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateLoginData(formData)) {
            setMessageType("success");
            setMessage("Login realizado com sucesso! Redirecionando ao dashboard...");
            setTimeout(() => {
                router.push(`/dashboard-${userType}`);
            }, 2000);
        }
    };

    const clearMessage = () => {
        setMessage("");
        setMessageType("");
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
                            <li><Link href="/contato">Contato</Link></li>
                            <li><Link href="/login" className="btn-login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {message && (
                <MessageContainer
                    type={messageType}
                    message={message}
                    onClear={clearMessage}
                />
            )}

            <main>
                <div className="container">
                    <div className={loginStyle["login-container"]}>
                        <div className={loginStyle["login-header"]}>
                            <h2>Login</h2>
                            <p>Entre na sua conta para acessar todas as funcionalidades</p>
                        </div>

                        <div className={loginStyle["user-type-toggle"]}>
                            <button
                                type="button"
                                className={userType === "candidato" ? "active" : ""}
                                onClick={() => handleUserType("candidato")}
                            >
                                Sou Candidato
                            </button>
                            <button
                                type="button"
                                className={userType === "empresa" ? "active" : ""}
                                onClick={() => handleUserType("empresa")}
                            >
                                Sou Empresa
                            </button>
                        </div>

                        <form
                            className={loginStyle["login-form"]}
                            onSubmit={handleSubmit}
                            autoComplete="off"
                        >
                            <div className={loginStyle["form-group"]}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={loginStyle["form-group"]}>
                                <label htmlFor="senha">Senha</label>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={loginStyle["forgot-password"]}>
                                <Link href="/recuperar-senha">Esqueceu a senha?</Link>
                            </div>

                            <div className={loginStyle["remember-me"]}>
                                <input type="checkbox" id="lembrar" name="lembrar" />
                                <label htmlFor="lembrar">Lembrar de mim</label>
                            </div>

                            <button type="submit" className={loginStyle["login-button"]}>Entrar</button>
                            <input type="hidden" name="userType" value={userType} />
                        </form>

                        <div className={loginStyle["register-link"]}>
                            <p>
                                Ainda não tem uma conta?{" "}
                                <Link
                                    href={`/cadastro?tipo=${userType}`}
                                    id="register-link"
                                >
                                    Cadastre-se
                                </Link>
                            </p>
                        </div>

                        <div className={loginStyle["accessibility-controls"]}>
                            <div className={loginStyle["accessibility-control"]}>
                                <input type="checkbox" id="contrast-toggle" />
                                <label htmlFor="contrast-toggle">Alto Contraste</label>
                            </div>
                            <div className={loginStyle["accessibility-control"]}>
                                <input type="checkbox" id="text-size-toggle" />
                                <label htmlFor="text-size-toggle">Texto Grande</label>
                            </div>
                        </div>
                    </div>
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
                                <li><Link href="/cadastro">Cadastre-se</Link></li>
                                <li><Link href="/termos_privacidade">Termos de Uso e Política de Privacidade</Link></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Contato</h3>
                            <p><i className="fas fa-envelope"></i> contato@conectavagas.com</p>
                            <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
                            <div className={`${loginStyle["social-media"]} ${loginStyle.rodapeSocial}`}>
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