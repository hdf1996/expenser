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

    <FloatButton path="/movements/new"/>
  </Layout>
)
