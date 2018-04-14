import '../base.scss'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { presence, validate } from '../../validators';
import { create } from '../../services/movements';

class New extends Component {
  state = { errors: {}, amount_currency: 'clp', origin: 'Caja de ahorro',
            done_at: new Date().toISOString().substr(0, 10)}
  VALIDATORS = {
    reason: [presence()],
    amount_cents: [presence()],
    origin: [presence()],
    amount_currency: [presence()], // inclussion
    done_at: [presence()]
  };


  validate = () => validate(this.state, this.VALIDATORS)
  isValid = () => this.validate().length === 0;
  onChange = (field) => e => this.setState({[field]: e.target.value})
  onSubmit = () => {
    this.setState({ loading: true })
    create(this.state).then(body => {
      if(typeof body.errors === 'undefined') {
        this.props.router.push('/')
        this.setState({ loading: false })
      } else {
        this.setState({ errors: body.errors, loading: false })
      }
    })
  }

  render () {
    return (
      <Layout>
        <Input value={this.state.reason}
               error={this.state.errors.reason}
               name="Razon"
               onChange={this.onChange('reason')}/>
        <Input value={this.state.amount_cents}
               error={this.state.errors.amount_cents}
               name="Monto"
               type="number"
               onChange={this.onChange('amount_cents')}/>
        <Input value={this.state.origin}
               error={this.state.errors.origin}
               name="Origen"
               onChange={this.onChange('origin')}/>
        <Input value={this.state.amount_currency}
               error={this.state.errors.amount_currency}
               name="Moneda"
               onChange={this.onChange('amount_currency')}/>
        <Input value={this.state.done_at}
               error={this.state.errors.done_at}
               name="Fecha"
               type="date"
               onChange={this.onChange('done_at')}/>

        <Button value="Agregar"
                disabled={!this.isValid() || this.state.loading}
                loading={this.state.loading}
                onSubmit={this.onSubmit}/>
      </Layout>
    )
  }
}

export default withRouter(New);
