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
  state = { creditCardMovements: null, loading: true, page: 1}

  componentDidMount = () => this.fetch()
  fetch = () => {
    index({}).then(
      res => this.setState({ creditCardMovements: res.page, loading: false })
    )
  }
  fetchNextPage = () => {
    if(this.state.loading) return;
    this.setState({ loading: true }, () => {
      index({page: this.state.page + 1}).then(
        res => this.setState({
          creditCardMovements: [...this.state.creditCardMovements, ...res.page],
          loading: false,
          page: this.state.page + 1
        })
      )
    })
  }

  render () {
    if (this.state.loading && this.state.creditCardMovements === null) {
      return (
        <div className="flex-align-center flex-justify-center full-height full-width">
          <Spinner color="orange"/>
        </div>
      );
    }
    return (
      <Layout className="items-list padding-top-15">
        <InfiniteScrollContainer onNextPage={() => this.fetchNextPage()}
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
