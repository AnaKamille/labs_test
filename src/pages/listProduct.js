import React, { Component } from 'react';
import { View, Text , TouchableOpacity ,SafeAreaView} from 'react-native';

import {connect} from 'react-redux'
import {authUserSignout} from '../actions/authActions' 

import style_global from '../global/style'




class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  googleSignout = () => {
    console.log('Google signout');
   this.props.authUserSignout();
}

  render() {
    return (
    <SafeAreaView style={{flex:1}}>
       <View style={{flex:6 , justifyContent:"center" , alignItems:"center"}}>
        <View>
          <Text>List goes here</Text>
        </View>
       </View>
              
      <View style={{flex:1 , justifyContent:"flex-end" , alignItems:"center"}}>
        <TouchableOpacity onPress={()=> this.googleSignout()}>
          <Text>Sign out</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
    );
  }
}


const mapStateToProps = state => ({
  authLoader: state.AuthReducer.authLoader,
  authError : state.AuthReducer.authError,
});

export default connect(mapStateToProps,{ authUserSignout } )(ListProduct);

