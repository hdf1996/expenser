import '../base.scss'
import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {presence, validate} from '../../validators';

export default class New extends Component {
  state = { currency: 'clp', date: new Date().toISOString().substr(0, 10)}
  VALIDATORS = {
    reason: [presence()],
    amount: [presence()],
    origin: [presence()],
    currency: [presence()], // inclussion
    date: [presence()]
  };

  onChange = (field) => e => this.setState({[field]: e.target.value})
  validate = () => validate(this.state, this.VALIDATORS)
  isValid = () => this.validate().length === 0;

  render () {
    return (
      <div>
        <Input value={this.state.reason}
               name="Razon"
               onChange={this.onChange('reason')}/>
        <Input value={this.state.amount}
               name="Monto"
               type="number"
               onChange={this.onChange('amount')}/>
        <Input value={this.state.origin}
               name="Origen"
               onChange={this.onChange('origin')}/>
        <Input value={this.state.currency}
               name="Moneda"
               onChange={this.onChange('currency')}/>
        <Input value={this.state.date}
               name="Fecha"
               type="date"
               onChange={this.onChange('date')}/>

        <Button value="Agregar"
                disabled={!this.isValid() || this.state.loading}
                loading={this.state.loading}
                onSubmit={() => this.setState({loading: true})}/>
      </div>
    )
  }
}
