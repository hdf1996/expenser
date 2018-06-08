import './Button.scss'
import Spinner from './Spinner'

const Button = ({
  value,
  float,
  disabled,
  onSubmit,
  loading
}) => (
  <div onClick={e => !disabled && onSubmit(e)}
       className={`btn ${disabled ? 'disabled' : ''} ${float ? 'float': ''}`}>
    {value}
    <Spinner visible={loading}/>
  </div>
)

Button.defaultProps = {
  value: '',
  float: false,
  disabled: false,
  loading: false,
  onSubmit: () => {}
}

export default Button;
