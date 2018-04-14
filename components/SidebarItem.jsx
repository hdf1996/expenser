import './SidebarItem.scss';
import Link from 'next/link'

const SidebarItem = ({
  text,
  path
}) => (
  <Link href={path}>
    <a className="sidebar-item unselectable">
      {text}
    </a>
  </Link>
)

SidebarItem.defaultProps = {
  text: '',
  path: '/'
}

export default SidebarItem
