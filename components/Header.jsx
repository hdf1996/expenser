import './Header.scss';
import './Sidebar.scss';

import Hamburger from './Hamburger';

const Header = ({
  title, 
  onClick, 
  actionElement,
  actionEvent
}) => (
  <div className="header flex-justify-space-between flex-align-center">
    <div className="flex-row flex-align-center">
      <Hamburger onClick={onClick}/>
      <h2>{title}</h2>
    </div>
    <div className="margin-15 flex-align-center"
         onClick={actionEvent}>
      {actionElement}
    </div>
  </div>
)

Header.defaultProps = {
  title: '',
  onClick: () => {},
  actionElement: <div />,
  actionEvent: () => {}
}

export default Header;
