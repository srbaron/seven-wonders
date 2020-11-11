import './CardButton.css';

function CardButton(props) {
    return (
      <div className='card-container'>
          <span id='activation-resource-cost'></span>
          <span id='activation-gold-cost'></span>
          <span id='activation-prereq-cost'></span>
      </div>
    );
  }
  
  export default CardButton;
  