import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style_global from '../global/style'


export default class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={style_global.container}>
        <Text> Create product </Text>
      </View>
    );
  }
}