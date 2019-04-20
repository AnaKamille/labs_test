import React, { Component } from 'react';
import { View, Text ,SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux'
import {authUser} from '../actions/authActions' 

import style_global from '../global/style'



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  googleLogin = () => {
      console.log('GOOGLE LOGIN')
     this.props.authUser()
  }



  render() {
    return (
        <SafeAreaView style={{flex:1}}>

                <View style={{flex:2 , justifyContent:'flex-start' , padding:20}}>
                    <Text style={{alignSelf:"flex-end"}}> TOTVS LABS </Text>
                </View>

                <View style={{flex:3 , justifyContent:'flex-start'}}>
                    <Icon
                        name="tags"
                        size={130}
                        color="black"
                        style={{padding:20,alignSelf:"center"}}
                    />
                    <Text style={{alignSelf:"center"}}> Coding Challenge </Text>
                </View>
                
            
                    
                <View  style={{flex:2 , justifyContent:'flex-end'}}>
                        <Button
                            icon={
                                    <Icon
                                    name="google"
                                    size={15}
                                    color="white"
                                  
                                    />
                            }
                            title=" Login with Google"
                            onPress={() => this.googleLogin()}
                            buttonStyle={style.button}
                            
                        />
                </View>

        </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
   button : { 
       
              alignItems:"center",
              backgroundColor:"black",
              padding: 15,
              marginHorizontal: 50,
              borderRadius: 9,
              
            }

})

const mapStateToProps = state => ({
    authLoader: state.AuthReducer.authLoader,
    authError : state.AuthReducer.authError,
  });
  
  export default connect(mapStateToProps,{ authUser } )(Login);
  