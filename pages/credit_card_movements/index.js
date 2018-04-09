import '../base.scss'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import { presence, validate } from '../../validators';
import { index } from '../../services/creditCardMovements';

class Index extends Component {
  state = { creditCardMovements: [], loading: true}

  componentDidMount = () => index({}).then(res => this.setState({ creditCardMovements: res.page, loading: false }))

  render () {
    if (this.state.loading) {
      return (
        <div className="flex-align-center flex-justify-center full-height full-width">
          <Spinner color="orange"/>
        </div>
      );
    }
    return (
      <div>
        {this.state.creditCardMovements.length}
      </div>
    )
  }
}

export default withRouter(Index);
