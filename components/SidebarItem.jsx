import './SidebarItem.scss';
import Link from 'next/link'

const SidebarItem = ({text, path, onClick}) => (
  <Link href={path} onClick={onClick}>
    <a className="sidebar-item unselectable">
      {text}
    </a>
  </Link>
)

SidebarItem.defaultProps = {
  text: '',
  path: '/',
  onClick: () => {}
}

export default SidebarItem
