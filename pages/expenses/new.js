import React, { Component } from 'react';
import Input from '../../components/Input';

const Button = ({value}) => value;

export default class New extends Component {
  state = { date: new Date().toISOString().substr(0, 10) }
  onChange = (field) => e => this.setState({[field]: e.target.value})

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
        <Input value={this.state.currency}
               name="Moneda"
               type="string"
               onChange={this.onChange('currency')}/>
        <Input value={this.state.date}
               name="Fecha"
               type="date"
               onChange={this.onChange('date')}/>

        <Button value="Agregar"/>
      </div>
    )
  }
}
