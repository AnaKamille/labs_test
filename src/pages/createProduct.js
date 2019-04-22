import React, { Component } from 'react';
import { View, Text ,TextInput,SafeAreaView, StyleSheet ,TouchableOpacity , Image} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';
import { changeColor , changePrice , changeName , 
  changeImage , changeSize  , changeProduct } from '../actions/productActions' ;

import style_global from '../global/style'



class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1 ,justifyContent:"center"}}>
            <View style={{flex:3 , paddingBottom:30}}> 
                 <Image style={{flex:1 , paddingHorizontal:-50}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
              <Button
                  icon={
                          <Icon
                          name="camera"
                          size={15}
                          color="white"
                          style={{marginHorizontal: 10}}
                          />
                  }
                  title="EDIT PICTURE"
                  onPress={() => this.googleLogin()}
                  buttonStyle={{borderColor:"white", borderWidth:5, borderRadius:30 , color:"transparent" ,paddingHorizontal:15, marginHorizontal:50 , position:"absolute" , top:-60 , left:140 , fontSize:10}}
                  titleStyle={{fontSize:13}}
                />

            </View>
            <View style={{padding:10 , flex:5}}>
         
              <View style={{flex:1}}>
                 <Text style={style.label}>Name</Text>
                 <TextInput  style={style.input} value={this.props.name}  onChangeText={texto => {this.props.changeName(texto)}}  placeholder='Name'/>
              </View>
              <View style={{flex:1}}>
              <Text style={style.label}>Price</Text>
                  <TextInput  style={style.input} value={this.props.price} onChangeText={texto => {this.props.changePrice(texto)}} placeholder='$00.00'/>
              </View>
              <View style={{flex:1 , flexDirection:"row" , justifyContent: 'space-between' }}>
                <View style={{flex:1}}>
                    <Text style={style.label}>Color</Text>
                    <TextInput  style={style.input} value={this.props.color} onChangeText={texto => {this.props.changeColor(texto)}} placeholder='Black'/>     
                </View>
                <View style={{flex:1}}>
                    <Text style={style.label}>Size</Text>
                    <TextInput  style={style.input}  value={this.props.size} onChangeText={texto => {this.props.changeSize(texto)}}  placeholder='M'/>     
                </View>
              </View>
              <View style={{flex:1 , justifyContent:"flex-end",padding:20}}>
                <Button
                    title="Save"
                    onPress={() => this.googleLogin()}
                    buttonStyle={style.button}
                    textStyle={{fontSize:5}}
                    
                              
                          />
                <TouchableOpacity style={{alignItems:"center" , padding:10}}>
                   <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
              
      </View>
    );
  }
}

const style = StyleSheet.create({
  button : { 
      
             alignItems:"center",
             backgroundColor:"black",
             borderRadius: 9,
             padding:10,
             marginHorizontal:60,
             

             
           },
  input: {
    fontSize:15 ,
    backgroundColor:"white" ,
    borderRadius:10,
    margin: 15,
    paddingHorizontal: 20,
    borderRadius:10,
    flex:1

  },
  label:{
    marginBottom:-8,
    paddingHorizontal: 17,
    color:"grey"
  }

})

const mapStateToProps = state => ({
  
  color: state.ProductReducer.color,
  price: state.ProductReducer.price,
  name: state.ProductReducer.name,
  image: state.ProductReducer.image,
  size:state.ProductReducer.size,
  productError: state.ProductReducer.productError,
  productLoader: state.ProductReducer.productLoader

});

export default connect(mapStateToProps,{ changeColor , changePrice , changeName , 
                                         changeImage , changeSize  , changeProduct  } )(CreateProduct);
