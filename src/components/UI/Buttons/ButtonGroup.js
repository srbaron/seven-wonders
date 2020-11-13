import SmallButton from './SmallButton';
import './ButtonGroup.css'

function ButtonGroup() {

    return (
        <div className='button-group-container'>
            <SmallButton btnText={3}></SmallButton>
            <SmallButton btnText={4}></SmallButton>
            <SmallButton btnText={5}></SmallButton>
            <SmallButton btnText={6}></SmallButton>
            <SmallButton btnText={7}></SmallButton>
        </div>
    );
  }
  
  export default ButtonGroup;