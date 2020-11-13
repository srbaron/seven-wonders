import CardButton from '../../components/UI/Buttons/CardButton';
import InputField from '../../components/UI/InputField';
import SmallButton from '../../components/UI/Buttons/SmallButton';

import { Link } from 'react-router-dom';

function Join() {

    return (
        <div className='App-header'>
            <p>Join a Game</p>
            <InputField labelText='Enter Name'></InputField>
            <InputField labelText='Enter Join Code'></InputField>
            <CardButton btnText='Join'></CardButton>
            <Link to='/'>
                <SmallButton btnText='Go Back'></SmallButton>
            </Link>
        </div>
    );
  }
  
  export default Join;