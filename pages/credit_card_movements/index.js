import '../base.scss'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
import Layout from '../../components/Layout';
import CreditCardMovement from '../../components/CreditCardMovement';
import InfiniteScrollContainer from '../../components/InfiniteScrollContainer';
import FilterableIcon from '../../components/FilterableIcon';
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

  handleAction = () => this.setState({displayFilter: !this.state.displayFilter})
  render () {
    if (this.state.loading && this.state.creditCardMovements.length === 0) {
      return (
        <div className="flex-align-center flex-justify-center full-height full-width">
          <Spinner color="orange"/>
        </div>
      );
    }
    return (
      <Layout title="Movimientos" 
              className="items-list"
              actionElement={<FilterableIcon />}
              actionEvent={this.handleAction}>
        <div className={`${this.state.displayFilter ? '' : 'hidden-height'} animated`}>
          <h2 className="margin-bottom-15">Filtros</h2>
        </div>
        <InfiniteScrollContainer onNextPage={() => this.fetch()}
                                 loading={this.state.loading}>
          {this.state.creditCardMovements.map(creditCardMovement => (
            <CreditCardMovement id={creditCardMovement.id}
                                reason={creditCardMovement.reason}
                                amount_cents={creditCardMovement.amount_cents}
                                amount_currency={creditCardMovement.amount_currency}
                                credit_card_last_four_digits={creditCardMovement.credit_card_last_four_digits}
                                done_at={creditCardMovement.done_at}/>
          ))}
        </InfiniteScrollContainer>
      </Layout>
    )
  }
}

export default withRouter(Index);
