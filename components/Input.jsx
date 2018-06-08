import './Input.scss';

const Input = ({
  value,
  name,
  onChange,
  type,
  error,
  horizontal
}) => (
  <div className={`input-container ${horizontal ? 'flex-row flex-align-center' : 'flex-column margin-bottom-15' }`}>
    <label className={`light ${horizontal && 'margin-right-15' }`}>{name}</label>
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
  onChange: () => {},
  horizontal: false
}

export default Input;
