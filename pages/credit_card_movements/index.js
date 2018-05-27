import '../base.scss'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import Layout from '../../components/Layout';
import CreditCardMovement from '../../components/CreditCardMovement';
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
      <Layout className="items-list padding-top-15">
        {this.state.creditCardMovements.map(creditCardMovement => (
          <CreditCardMovement reason={creditCardMovement.reason}
                              amount_cents={creditCardMovement.amount_cents}
                              amount_currency={creditCardMovement.amount_currency}
                              done_at={creditCardMovement.done_at}/>
        ))}
      </Layout>
    )
  }
}

export default withRouter(Index);
