import './Produto.css'

function Produto({ nome, foto, fabricante, preco }) {
    return (
        <div className="produto">
            <h3>{nome}</h3>
            <img src={foto} alt="Imagem" />
            <p>Fabricante: {fabricante}</p>
            <p>Preço: R$ {preco}</p>
        </div>
    )
}

export default Produto;