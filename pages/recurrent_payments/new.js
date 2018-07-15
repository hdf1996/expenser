import '../base.scss'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { presence, validate } from '../../validators';
import { create } from '../../services/recurrentPayments';

class New extends Component {
  state = { errors: {}, value_currency: 'ars', origin: 'Caja de ahorro',
            done_at: new Date().toISOString().substr(0, 10)}
  VALIDATORS = {
    reason: [presence()],
    value: [presence()],
  };

  validate = () => validate(this.state, this.VALIDATORS)
  isValid = () => this.validate().length === 0;
  onChange = (field) => e => this.setState({[field]: e.target.value})
  onSubmit = () => {
    this.setState({ loading: true })
    create(this.state).then(body => {
      if(typeof body.errors === 'undefined') {
        this.props.router.push('/recurrent_payments')
        this.setState({ loading: false })
      } else {
        this.setState({ errors: body.errors, loading: false })
      }
    })
  }

  render () {
    return (
      <Layout title="Nuevo pago recurrente">
        <Input value={this.state.reason}
               error={this.state.errors.reason}
               name="Razon"
               onChange={this.onChange('reason')}/>

        <Input value={this.state.value}
               error={this.state.errors.value}
               name="Monto"
               type="number"
               onChange={this.onChange('value')}/>

        <Button value="Agregar"
                disabled={!this.isValid() || this.state.loading}
                loading={this.state.loading}
                onSubmit={this.onSubmit}/>
      </Layout>
    )
  }
}

export default withRouter(New);
