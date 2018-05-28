import Layout from '../../components/Layout';
import Card from '../../components/Card';

import { Component } from 'react'

const PERIODS = {
  monthly: 'Mensual'
}

class Index extends Component {
  state = { recurrentPayments: [{reason: 'Telecentro', value_cents: 1232, value_currency: 'ars', period: 'monthly'}], loading: false }
  render () {
    return (
      <Layout title="Pagos recurrentes">
        {this.state.recurrentPayments.map(card => (
          <Card title={card.reason}
                firstColumnName="Costo"
                firstColumnValues={[`${card.value_cents / 100} ${card.value_currency}`]}
                thirdColumnValues={[PERIODS[card.period]]}
                />
        ))}
      </Layout>
    )
  }
}

export default Index;
