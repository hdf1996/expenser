import './base.scss'
import Card from '../components/Card';
import Header from '../components/Header';

export default () => (
  <div>
    <Header title="Tarjetas de credito"/>
    <div className="container">

      {[1, 2].map(() => <Card/>)}
    </div>
  </div>
)
