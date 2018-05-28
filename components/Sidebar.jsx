import './Sidebar.scss';

import SidebarItem from './SidebarItem';

const Sidebar = ({visible, onBlur}) => (
  <div className={`sidebar-container ${visible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
    <div className="sidebar">
      <SidebarItem text="Inicio"
                   path="/"
                   key="home-sidebar"/>
      <SidebarItem text="Pagos frecuentes"
                   path="/recurrent_payments"
                   key="recurrent-payments-sidebar"/>
      <SidebarItem text="Movimientos"
                   path="/credit_card_movements"
                   key="credit-card-movements-sidebar"/>
    </div>
    <div className="overlay" onClick={onBlur}/>
  </div>
)

Sidebar.defaultProps = {
  visible: false,
  onBlur: () => {}
}

export default Sidebar;
