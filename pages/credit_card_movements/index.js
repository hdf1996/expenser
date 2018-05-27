import '../base.scss'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import Layout from '../../components/Layout';
import CreditCardMovement from '../../components/CreditCardMovement';
import InfiniteScrollContainer from '../../components/InfiniteScrollContainer';
import { presence, validate } from '../../validators';
import { index } from '../../services/creditCardMovements';

class Index extends Component {
  state = { creditCardMovements: [], loading: true, nextPage: 1}

  componentDidMount = () => this.fetch()
  fetch = () => {
    if(this.state.nextPage === null) return;
    this.setState({ loading: true }, () => {
      index({page: this.state.nextPage}).then(
        res => this.setState({
          creditCardMovements: [...this.state.creditCardMovements, ...res.page],
          loading: false,
          nextPage: res.next_page
        })
      )
    })
  }

  render () {
    if (this.state.loading && this.state.creditCardMovements.length === 0) {
      return (
        <div className="flex-align-center flex-justify-center full-height full-width">
          <Spinner color="orange"/>
        </div>
      );
    }
    return (
      <Layout className="items-list padding-top-15">
        <InfiniteScrollContainer onNextPage={() => this.fetch()}
                                 loading={this.state.loading}>
          {this.state.creditCardMovements.map(creditCardMovement => (
            <CreditCardMovement id={creditCardMovement.id}
                                reason={creditCardMovement.reason}
                                amount_cents={creditCardMovement.amount_cents}
                                amount_currency={creditCardMovement.amount_currency}
                                done_at={creditCardMovement.done_at}/>
          ))}
        </InfiniteScrollContainer>
      </Layout>
    )
  }
}

export default withRouter(Index);
