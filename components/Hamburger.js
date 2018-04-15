import './Hamburger.scss';

const Hamburger = ({onClick}) => (
  <div className="hamburger unselectable"
       onClick={onClick}>
    <span className="unselectable"/>
    <span className="unselectable"/>
    <span className="unselectable"/>
  </div>
);

Hamburger.defaultProps = {
  onClick: () => {}
}

export default Hamburger;
