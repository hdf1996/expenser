import './FloatButton.scss';

import Link from 'next/link';

const FloatButton = ({path}) => (
  <Link href={path}>
    <a className="float-button">
      +
    </a>
  </Link>
)

FloatButton.defaultProps = {
  path: '/'
}

export default FloatButton;
