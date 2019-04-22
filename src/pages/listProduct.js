import React, { Component } from 'react';
import { View, Text , TouchableOpacity ,SafeAreaView,FlatList , StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';


import {connect} from 'react-redux'
import {authUserSignout} from '../actions/authActions' 


import style_global from '../global/style'
import { Actions } from 'react-native-router-flux';


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

goToProduct = () => {
  Actions.createProduct()
}

  render() {
    return (
    <SafeAreaView style={{flex:1}}>
       <View style={{flex:6 , justifyContent:"center" , alignItems:"center"}}>
       <FlatList data={this.props.pruductList}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
       </View>

       <Button
            title=" Add new product"
            onPress={() => this.goToProduct()}
            buttonStyle={styles.button}
        />
              
      <View style={{flex:1 , justifyContent:"flex-end" , alignItems:"center"}}>
        <TouchableOpacity onPress={ ()=> { this.googleSignout() }} >
          <Text>Sign out</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
    );
  }
}






const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
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
  pruductList: state.ProductReducer.productList

});

export default connect(mapStateToProps,{ authUserSignout } )(ListProduct);

