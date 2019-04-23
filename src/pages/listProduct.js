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

  editProduct = (product) => {
    console.log('edit product' , product)
    Actions.editProduct({product:product})
  }
  googleSignout = () => {
    console.log('Google signout');
   this.props.authUserSignout();
}

  addProduct = () => {
    Actions.createProduct()
  }

  render() {
    return (
    <SafeAreaView style={{flex:1}}>
       <View style={{flex:6  }}>
        <FlatList data={this.props.pruductList}
        keyExtractor={(item,index)=>{ item.id = index , item.id } }
            renderItem={({item}) => {
              return(
               
                <View style={{flexDirection:'row',padding:8 ,justifyContent: 'space-between', borderBottomColor:'grey',borderBottomWidth:0.3}}>
                  
                  <View style={{flex:2}} > 
                    <Image source={{uri: item.image}} style={{width:100,height:150,borderRadius:15}}/>
                  </View>
                  
                  <View style={{justifyContent:'space-around' ,flex:2}} >
                      <View style={{flex:1}}>
                          <Text style={styles.itemBig}>{(item.name).substring(0,13)}</Text>
                      </View>
                      <View style={{flex:1}}>
                        <Text style={styles.itemBigPrice}>RP {item.price}</Text>
                      </View>
                     
                      <View style={{flex:1 , flexDirection:'row',justifyContent:'space-between' }}>
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

                  <View  style={{alignItems:"flex-end",flex:2}}>
                      <Button
                          title="EDIT"
                          onPress={() => this.editProduct(item)}
                          buttonStyle={{alignSelf:"flex-end",...styles.transparentButton}}
                          titleStyle={{fontSize:16 , color:'grey'}}
                    />
                  </View>
                  
              </View>
              )
          }}
          />
       </View>

    <View style={{flex:1}}>
          <Button
                title=" Add new product"
                onPress={() => this.addProduct()}
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
   
    fontSize: 15,
   
  },
  itemBig: {
    fontSize: 16,
  },
  itemBigPrice: {
    
    fontSize: 16,
    color: 'green'
   
  },
  itemTitle: {
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

