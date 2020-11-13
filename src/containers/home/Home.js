import CardButton from '../../components/UI/Buttons/CardButton';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='App-header'>
            <p>Welcome to Seven Wonders</p>
            <Link to='/host'>
                <CardButton btnText='Host Game'></CardButton>
            </Link>
            <Link to='/join'>
                <CardButton btnText='Join Game'></CardButton>
            </Link>
            <CardButton btnText='Rules'></CardButton>
        </div>
    );
  }
  
  export default Home;