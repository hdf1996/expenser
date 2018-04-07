import './Spinner.scss'

const Spinner = ({visible}) => (
  <div className={`spinner ${visible ? 'visible' : ''}`} />
)

Spinner.defaultProps = {
  visible: true
}

export default Spinner;
