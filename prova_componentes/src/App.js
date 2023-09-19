import './App.css';
import Cateogria from './componentes/Categoria';
import Noticia from './componentes/Noticia';

function App() {
  return (
    <div className="Container">
      <Cateogria categoria="Esporte" />
      <br />
      <Noticia />
    </div>
  );
}

export default App;
