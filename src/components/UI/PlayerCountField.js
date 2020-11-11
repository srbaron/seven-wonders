// import './PlayerCountField.css';

function PlayerCountField() {
    return (
      <div className='player-count-field-container'>
        <input type="number" id="player-count-field" min='3' max='7' step='1' required/>
      </div>
    );
  }
  
  export default PlayerCountField;
  