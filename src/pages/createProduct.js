import React, { Component } from 'react';
import FormProduct from '../components/FormProduct'

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <FormProduct create={true}/>
    )
  }
}
