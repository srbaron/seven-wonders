import './CardButton.css';

function CardButton(props) {
    return (
      <div className='card-button-container'>
          <button className='card-button'>
            {props.btnText}
          </button>
      </div>
    );
  }
  
  export default CardButton;
  