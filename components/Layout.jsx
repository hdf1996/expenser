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
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(registration => {
          console.log('SW registered: ', registration);
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  }

  render () {
    return (
      <Fragment>

        <Sidebar visible={this.state.showSidebar}
                 onBlur={this.toggleSidebar}/>
        <Header title="Tarjetas de credito"
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

export default Layout;
