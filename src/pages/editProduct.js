import React, { Component } from 'react';
import FormProduct from '../components/FormProduct'

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    console.log('Edit product screen' , this.props.product)
  }
  render() {
    return (
      <FormProduct create={false} product={this.props.product}/>
    )
  }
}