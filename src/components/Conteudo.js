import styles from './Conteudo.module.css'

function Conteudo() {
    return (
        <div className={styles.container}>
            <div className={styles.conteudo1}>
                <div className={styles.conteudo}>
                    <h2>Porque comprar na Nike?</h2>
                    <p className={styles.preto_txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles.conteudo}>
                    <h2>Qualidade e conforto!</h2>
                    <p className={styles.azul_txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className={styles.conteudo1}>
                <div className={styles.conteudo}>
                    <h2>Nossas lojas pelo Brasil?</h2>
                    <p className={styles.azul_txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles.conteudo}>
                    <h2>Variedade de produtos!</h2>
                    <p className={styles.preto_txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Conteudo;