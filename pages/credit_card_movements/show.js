import '../base.scss';
import { Component } from 'react';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';
import Label from '../../components/Label';
import { show } from '../../services/creditCardMovements';

const COLORS = {
  '0803': 'orange',
  '1261': 'yellow',
  '8662': 'blue'
}

const LABEL_COLORS = {
  'Corporativo': 'red'
};

class Show extends Component {
  state = { loading: true, creditCardMovement: null }

  componentDidMount = () => this.fetch()
  fetch = () => {
    if(this.state.nextPage === null) return;
    this.setState({ loading: true }, () => {
      show({id: this.props.url.query.id}).then(
        res => this.setState({
          creditCardMovement: res,
          loading: false
        })
      )
    })
  }

  render () {
    if (this.state.loading) return (
      <Layout className="flex-align-center flex-justify-center full-height full-width">
        <Spinner color="orange"/>
      </Layout>
    )
    return (
      <Layout title={"Detalle"} className="padding-bottom-60 flex-justify-space-between full-height full-width flex-column">
        <div>
          <h1 className="flex-align-start">{this.state.creditCardMovement.reason}</h1>
          <h2 className="flex-row flex-align-center padding-top-15">
            <div className={`color-block ${COLORS[this.state.creditCardMovement.credit_card_last_four_digits]}`} />
            {this.state.creditCardMovement.credit_card_name}
          </h2>
          <div className="padding-5 margin-top-15">
            {this.state.creditCardMovement.labels.map(label => (
              <Label value={label}
                     color={LABEL_COLORS[label]}/>
            ))}
          </div>
        </div>
        <h2 className="flex-align-self-end">{(this.state.creditCardMovement.amount_cents / 100).toFixed(2)} {this.state.creditCardMovement.amount_currency}</h2>

        <Button value="Borrar" />
      </Layout>
    )
  }
}

export default Show;
