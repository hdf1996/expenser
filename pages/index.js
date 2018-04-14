import './base.scss'
import Card from '../components/Card';
import Header from '../components/Header';
import FloatButton from '../components/FloatButton';
import Layout from '../components/Layout';

const cash = ['ars 3000', 'u$d 300', 'clp 300'];
const debt = ['ars 3000', 'u$d 300', 'clp 300'];
const fima = ['ars 3000', 'u$d 300'];

export default () => (
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
          firstColumnName="Dolar"
          firstColumnValues={['20,15 USD']}
          secondColumnName="Euro"
          secondColumnValues={['26,15 EUR']}
          thirdColumnName="Peso chileno"
          thirdColumnValues={['0,03 USD']}/>

    <FloatButton path="/movements/new"/>
  </Layout>
)
