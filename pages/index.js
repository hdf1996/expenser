import { Component } from 'react';
import './base.scss'
import Card from '../components/Card';
import Header from '../components/Header';
import FloatButton from '../components/FloatButton';
import Layout from '../components/Layout';
import { conversions } from '../services/currencies';

const cash = ['ars 3000', 'u$d 300', 'clp 300'];
const debt = ['ars 3000', 'u$d 300', 'clp 300'];
const fima = ['ars 3000', 'u$d 300'];

class Index extends Component {
  state = { currencies: { usd_cents: 0, clp_cents: 0, eur_cents: 0 } }

  componentDidMount = () => conversions({to: 'ars'}).then((res) => this.setState({currencies: res}))

  render () {
    return (
      <Layout>
        <Card title="Resumen"
              firstColumnName="Caja de ahorro"
              firstColumnValues={debt}
              secondColumnName="Efectivo"
              secondColumnValues={cash}
              thirdColumnName="Fima"
              thirdColumnValues={fima}/>
        <Card title="Monedas"
              className="orange"
              firstColumnName="1 Dolar"
              firstColumnValues={[`${this.state.currencies['usd_cents'] / 100} ARS`]}
              secondColumnName="1 Euro"
              secondColumnValues={[`${this.state.currencies['eur_cents'] / 100} ARS`]}
              thirdColumnName="1 Peso chileno"
              thirdColumnValues={[`${this.state.currencies['clp_cents'] / 100} ARS`]}/>

        <FloatButton path="/movements/new"/>
      </Layout>
    )
  }
}

export default Index;
