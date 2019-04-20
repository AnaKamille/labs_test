import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style_global from '../global/style'
import { Actions } from 'react-native-router-flux'

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
      this.goToLogin()
  }

  goToLogin(){
      setTimeout(() => {
          Actions.replace('login')
      }, 1000);
  }

  render() {
    return (
     <View style={style_global.container}>
         <Text>Splash</Text>
     </View>
    );
  }
}
