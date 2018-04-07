import './Input.scss';

const Input = ({value, name, onChange, type}) => (
  <div className="input-container">
    <label className="light">{name}</label>
    <input className="input"
           type={type}
           onChange={onChange}
           value={value}/>
  </div>
);

Input.defaultProps = {
  value: '',
  name: '',
  type: 'text',
  onChange: () => {}
}

export default Input;
