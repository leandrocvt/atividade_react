import styles from './Header.module.css'
import logo from "../assets/img/logo.svg"

function Header() {
    return (
        <header>
            <div id={styles.topo}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo Nike" />
                </div>
                <div className={styles.btn_login}>
                    <input type="button" value="Login" />
                </div>
            </div>
            <div className={styles.container_cadastro}>
                <form id={styles.formulario}>
                    <h1>Cadastre-se</h1>
                    <input type="text" name="username" id="username" placeholder="Digite seu nome"
                        maxlength="30" required />
                    <input type="text" name="endereco" id="endereco" placeholder="Digite seu endereço"
                        maxlength="60" required />
                    <input type="text" name="telefone" id="telefone" placeholder="Digite seu telefone"
                        maxlength="15" required />
                    <input type="text" name="cep" id="cep" placeholder="Digite seu CEP"
                        maxlength="15" required />
                    <input type="submit" value="Cadastrar" className={styles.cadastrar} />
                </form>
            </div>
        </header>
    )
}

export default Header;