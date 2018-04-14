import './Sidebar.scss';

import SidebarItem from './SidebarItem';

const Sidebar = ({visible, onBlur}) => (
  <div className={`sidebar-container ${visible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
    <div className="sidebar">
      <SidebarItem text="Inicio"
                   path="/"/>
      <SidebarItem text="Agregar gasto"
                   path="/movements/new"/>
      <SidebarItem text="Ultimos consumos"
                   path="/credit_card_movements"/>
    </div>
    <div className="overlay" onClick={onBlur}/>
  </div>
)

Sidebar.defaultProps = {
  visible: false,
  onBlur: () => {}
}

export default Sidebar;
