import React, { Component } from 'react';
import FormProduct from '../components/FormProduct'

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <FormProduct create={false} product={this.props.product}/>
    )
  }
}