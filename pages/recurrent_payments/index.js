import Layout from '../../components/Layout';
import Card from '../../components/Card';
import FloatButton from '../../components/FloatButton';
import { index } from '../../services/recurrentPayments';
import Spinner from '../../components/Spinner';

import { Component } from 'react'

const PERIODS = {
  monthly: 'Mensual'
}

class Index extends Component {
  state = { recurrentPayments: [], loading: true }

  componentDidMount = () => this.fetch()
  fetch = () => {
    if (this.state.nextPage === null) return;
    this.setState({ loading: true }, () => {
      index({ page: this.state.nextPage }).then(
        res => this.setState({
          recurrentPayments: [...this.state.recurrentPayments, ...res.page],
          loading: false,
          nextPage: res.next_page
        })
      )
    })
  }

  render () {
    if (this.state.loading && this.state.recurrentPayments.length === 0) {
      return (
        <div className="flex-align-center flex-justify-center full-height full-width">
          <Spinner color="orange" />
        </div>
      );
    }
    return (
      <Layout title="Pagos recurrentes">
        {this.state.recurrentPayments.map(card => (
          <Card title={card.reason}
                firstColumnName="Costo"
                firstColumnValues={[`${card.value_cents / 100} ${card.value_currency}`]}
                thirdColumnValues={[PERIODS[card.period]]}
                />
        ))}

        <FloatButton path="/recurrent_payments/new"/>
      </Layout>
    )
  }
}

export default Index;
