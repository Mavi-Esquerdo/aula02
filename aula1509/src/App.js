import './App.css';
import Frases from './components/Frases';
import DigaMeuNome from './components/digaMeuNome';
import OlaMundo from './components/olaMundo';

function App() {
  return (
    <div className="container">
      <h1> Olá mundo </h1>
      <OlaMundo />
      <Frases />
      <DigaMeuNome nome="shoyu" idade="536" profissao="caloteiro" sonho="beijar ela"/>
    </div>
  );
}

export default App;
