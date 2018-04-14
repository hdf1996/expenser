import '../base.scss'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import Layout from '../../components/Layout';
import { presence, validate } from '../../validators';
import { index } from '../../services/creditCardMovements';

const CreditCardMovement = ({
  reason,
  amount_cents,
  amount_currency,
  done_at
}) => (
  <div className="flex-justify-space-between margin-bottom-15">
    <div className="flex-column">
      <span className="bold">{reason}</span>
      <span className="light">{done_at}</span>
    </div>
    <div className="bold flex-align-center flex-justify-center">
      {amount_cents / 100} {amount_currency}
    </div>
  </div>
)

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
