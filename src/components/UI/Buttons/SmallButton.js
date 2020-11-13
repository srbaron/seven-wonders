import './SmallButton.css';

function SmallButton(props) {
    return (
      <div className='player-amount-button-container'>
          <button className='player-amount-button'>
            {props.btnText}
          </button>
      </div>
    );
  }
  
  export default SmallButton;
  