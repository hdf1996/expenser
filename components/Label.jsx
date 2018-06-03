import './Label.scss';

const Label = ({value, color}) => (
  <div className={`label label-${color}`}>
    {value}
  </div>
)

export default Label;
