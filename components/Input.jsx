import './Input.scss';

const Input = ({
  value,
  name,
  onChange,
  type,
  error
}) => (
  <div className="input-container">
    <label className="light">{name}</label>
    {error}
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
  error: '',
  onChange: () => {}
}

export default Input;
