import './App.css';
import Conteudo from './components/Conteudo';
import Header from './components/Header';
import Produto from './components/Produto';
import tenis from './assets/img/tenis1.png'
import tenis2 from './assets/img/tenis2.jpg'
import corta_vento from './assets/img/corta_vento.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <Conteudo />
      <div className="container_produtos">
        <Produto nome='DUNK HIGH Vintage' foto={tenis} fabricante='Nike' preco='250,00' />
        <Produto nome='AIR ADJUST FORCE SP / AMBUSH' foto={tenis2} fabricante='Nike' preco='850,00' />
        <Produto nome='Corta Vento Preto' foto={corta_vento} fabricante='Nike' preco='300,00' />
      </div>
    </div>
  );
}

export default App;
