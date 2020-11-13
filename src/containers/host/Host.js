import CardButton from '../../components/UI/Buttons/CardButton';
import SmallButton from '../../components/UI/Buttons/SmallButton';
import ButtonGroup from '../../components/UI/Buttons/ButtonGroup';
import InputField from '../../components/UI/InputField';

import { Link } from 'react-router-dom';

function Host() {

    return (
        <div className='App-header'>
            <p>Host a Game</p>
            <InputField labelText='Enter Name'></InputField>
            <p>Maximum # of Players</p>
            <ButtonGroup></ButtonGroup>
            <CardButton btnText='Host'></CardButton>
            <Link to='/'>
                <SmallButton btnText='Go Back'></SmallButton>
            </Link>
        </div>
    );
  }
  
  export default Host;