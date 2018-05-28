const isProd = process.env.NODE_ENV === 'production'
import { Fragment, Component } from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Router from 'next/router'

class Layout extends Component {
  state = { showSidebar: false }
  toggleSidebar = () => this.setState({showSidebar: !this.state.showSidebar})

  componentDidMount = () => {
    Router.onRouteChangeStart = url => {
      this.setState({showSidebar: false})
    }
    if (isProd && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render () {
    return (
      <Fragment>

        <Sidebar visible={this.state.showSidebar}
                 onBlur={this.toggleSidebar}/>
        <Header title={this.props.title}
                onClick={this.toggleSidebar}
                />

        <div>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </Fragment>
    )
  }
}

Layout.defaultProps = {
  title: ''
}

export default Layout;
