import '../components/Card.scss';

const Card = ({
  id,
  firstColumnValues,
  firstColumnName,
  secondColumnName,
  secondColumnValues,
  thirdColumnName,
  thirdColumnValues,
  title,
  subtitle,
  actionText,
}) => (
  <div className="card blue">
    <div className="flex-row flex-justify-space-between flex-align-center">
      <div className="bold text-5">{title}</div>
      <div className="light">{subtitle}</div>
    </div>
    <div className="flex-row flex-justify-space-between">
      <div className="">
        <div className="light">{firstColumnName}</div>
        {
          firstColumnValues.map((value, index) => (
            <div className="bold" key={`first-column-${id}-${index}`}>{value}</div>
          ))
        }
      </div>
      <div>
        <div className="light">{secondColumnName}</div>
        {
          secondColumnValues.map((value, index) => (
            <div className="bold" key={`second-column-${id}-${index}`}>{value}</div>
          ))
        }
      </div>
      <div>
        <div className="light">{thirdColumnName}</div>
        {
          thirdColumnValues.map((value, index) => (
            <div className="bold" key={`third-column-${id}-${index}`}>{value}</div>
          ))
        }
      </div>
    </div>
    <div className="flex-justify-end">
      <div className="light">{actionText}</div>
    </div>
  </div>
);

Card.defaultProps = {
  title: '',
  subtitle: '',
  firstColumnName: '',
  firstColumnValues: [],
  secondColumnName: '',
  secondColumnValues: [],
  thirdColumnName: '',
  thirdColumnValues: [],
  actionText: '',
}

export default Card;
