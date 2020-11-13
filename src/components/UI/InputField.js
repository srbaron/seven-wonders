import './InputField.css';

function InputField(props) {
    return (
      <div className='input-field-container'>
        <input type="text" className="input-field" placeholder={props.labelText} required/>
      </div>
    );
  }
  
  export default InputField;
  