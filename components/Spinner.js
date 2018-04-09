import './Spinner.scss'

const Spinner = ({
  visible,
  color,
  className
}) => (
  <div className={`spinner ${visible ? 'visible' : ''} ${className}`}>
    <style jsx>{`
       .spinner::after {
         border-color: ${color} transparent;
       }
     `}</style>
  </div>
)

Spinner.defaultProps = {
  visible: true,
  color: 'white',
  className: ''
}

export default Spinner;
