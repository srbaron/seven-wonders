import logo from './logo.svg';
import './App.css';

import CardButton from './components/UI/CardButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Seven Wonders
        </p>
        <CardButton btnText='Host Game'></CardButton>
        <CardButton btnText='Join Game'></CardButton>
      </header>
    </div>
  );
}

export default App;
