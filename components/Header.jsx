import './Header.scss';
import './Sidebar.scss';

import Hamburger from './Hamburger';

const Header = ({title, onClick}) => (
  <div className="header flex-align-center">
    <Hamburger onClick={onClick}/>
    <h2>{title}</h2>
  </div>
)

Header.defaultProps = {
  title: '',
  onClick: () => {}
}

export default Header;
