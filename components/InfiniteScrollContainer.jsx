import { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Spinner from './Spinner';

class InfiniteScrollContainer extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (this.props.loading || (window.innerHeight + window.scrollY < findDOMNode(this).clientHeight) ) return;
    this.props.onNextPage();
  }

  render () {
    return (
      <div onScroll={this.onScroll}>
        {this.props.children}

        {this.props.loading && (<div className="flex-align-center flex-justify-center full-width">
          <Spinner color="orange"/>
        </div>)}
      </div>
    )
  }
}

InfiniteScrollContainer.defaultProps = {
  onNextpage: () => {},
  children: null,
  loading: false
}

export default InfiniteScrollContainer;
