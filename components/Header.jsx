import './Header.scss';

import Hamburger from './Hamburger';

const Header = ({title}) => (
  <div className="header flex-align-center">
    <Hamburger />
    <h2>{title}</h2>
  </div>
)

Header.defaultProps = {
  title: ''
}

export default Header;
