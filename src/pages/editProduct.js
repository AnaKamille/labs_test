import React, { Component } from 'react';
import FormProduct from '../components/FormProduct'

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <FormProduct create={false} productId={this.props.productId}/>
    )
  }
}
