import './Hamburger.scss';

const Hamburger = ({onClick}) => (
  <div className="hamburger" onClick={onClick}>
    <span />
    <span />
    <span />
  </div>
);

Hamburger.defaultProps = {
  onClick: () => {}
}

export default Hamburger;
