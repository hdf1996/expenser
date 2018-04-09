import '../base.scss'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import { presence, validate } from '../../validators';
import { create } from '../../services/movements';

class New extends Component {
  state = { expenses: [], loading: true}

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
        h
      </div>
    )
  }
}

export default withRouter(New);
