import React, { Component } from 'react';
import { View, Text , TouchableOpacity ,SafeAreaView,FlatList , StyleSheet,Image} from 'react-native';
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

  editProduct = (index) => {
    console.log('edit product' , index)
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
       <View style={{flex:6  , alignItems:"center"}}>
        <FlatList data={this.props.pruductList}
        keyExtractor={(item,index)=>{ item.id = index , item.id } }
            renderItem={({item}) => {
              console.log('meu item --> ',item)
              return(
               
                <View style={{flex:1 , flexDirection:'row', justifyContent:'space-between',padding:8 , borderBottomColor:'grey',borderBottomWidth:0.3}}>
                  
                  <View > 
                    <Image source={{uri: item.image}} style={{width:100,height:150,borderRadius:15}}/>
                  </View>
                  
                  <View style={{justifyContent:'space-around' , alignContent:"flex-start"}} >
                      <View style={{flex:1}}>
                          <Text style={styles.itemBig}>{(item.name).substring(0,13)}</Text>
                      </View>
                      <View style={{flex:1}}>
                        <Text style={styles.itemBigPrice}>RP {item.price}</Text>
                      </View>
                     
                      <View style={{flex:1 , flexDirection:'row',justifyContent:'space-around'}}>
                          <View>
                              <Text style={styles.itemTitle} >Color</Text>
                              <Text style={styles.item}>{item.color}</Text>
                          </View>
                          <View>
                              <Text style={styles.itemTitle} >Size</Text>
                              <Text style={styles.item}>{item.size}</Text>
                          </View>
                      </View>
                      
                  </View>

                  <View>
                      <Button
                          title="EDIT"
                          onPress={() => this.editProduct(item.id)}
                          buttonStyle={styles.transparentButton}
                          titleStyle={{fontSize:16 , color:'grey'}}
                    />
                  </View>
                  <View sytle={{flex:1 , borderWidth:10 , borderColor:'red',backgroundColor:'red'}}>
                  </View>
              </View>
              )
          }}
          />
       </View>

    <View style={{flex:1}}>
          <Button
                title=" Add new product"
                onPress={() => this.goToProduct()}
                buttonStyle={styles.button}
                
            />
                  
          <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
            <TouchableOpacity onPress={ ()=> { this.googleSignout() }} >
              <Text>Sign out</Text>
            </TouchableOpacity>
          </View>
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
    padding: 5,
    fontSize: 15,
   
  },
  itemBig: {
    paddingLeft: 20,
    fontSize: 18,
    padding:10
   
  },
  itemBigPrice: {
    paddingLeft: 20,
    fontSize: 18,
    padding:10,
    color: 'green'
   
  },
  itemTitle: {
    padding: 5,
    paddingBottom:-50,
    fontSize: 12,
    color:'grey'
   
  },
  button : { 
      
    alignItems:"center",
    backgroundColor:"black",
    padding: 15,
    marginHorizontal: 50,
    borderRadius: 9,
    
  },
  transparentButton:{
    backgroundColor: 'rgba(100, 100, 100, 0)',
    borderColor:"grey", 
    borderWidth:2,
    borderRadius:30 , 
    paddingHorizontal:20, 
    marginHorizontal:10 , 
   
    
  }
})


const mapStateToProps = state => ({
  authLoader: state.AuthReducer.authLoader,
  authError : state.AuthReducer.authError,
  pruductList: state.ProductReducer.productList

});

export default connect(mapStateToProps,{ authUserSignout } )(ListProduct);

