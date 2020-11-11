import './App.css';

import CardButton from './components/UI/CardButton';
import InputField from './components/UI/InputField';
import PlayerCountField from './components/UI/PlayerCountField';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Welcome to Seven Wonders
        </p>
        <CardButton btnText='Host Game'></CardButton>
        <CardButton btnText='Join Game'></CardButton>
        <CardButton btnText='Rules'></CardButton>

        <p>
          Join a Game
        </p>
        <InputField labelText='Enter Name'></InputField>
        <InputField labelText='Enter Join Code'></InputField>
        <CardButton btnText='Join'></CardButton>

        <p>
          Host a Game
        </p>
        <InputField labelText='Enter Name'></InputField>
        <PlayerCountField></PlayerCountField>
        <CardButton btnText='Host'></CardButton>
      </header>
    </div>
  );
}

export default App;
