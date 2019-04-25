import React, { Component } from 'react';
import { View, Text ,TextInput,ScrollView, StyleSheet ,TouchableOpacity , Image,Alert} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';


import { addProduct,editProduct,removeProduct,renderProduct  } from '../actions/productActions' ;
import { Actions } from 'react-native-router-flux';

class FormProduct extends Component {
  constructor(props) {
    super(props);
    this.isCreate = this.props.create 
    this.pictureButton = this.isCreate ? 'ADD PICTURE' : 'EDIT PICTURE'

    this.state = {
      image:  this.props.product && this.props.product.image || 'https://imbindonesia.com/images/placeholder/camera.jpg',
      color:  this.props.product &&this.props.product.color || "" ,
      size:  this.props.product && this.props.product.size    || "" , 
      price:  this.props.product &&this.props.product.price  || "" , 
      name:   this.props.product &&this.props.product.name    || "" ,
      loader: false,
      
    };
  }
  takeAPicture = () => {
    console.log('aqui!');
    const options = {
      title: 'Product Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.showImagePicker(options, (response) => {
      console.log('camera', response)
  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          image: response.uri,
        });
      }
    })
  }
//Save the product in form
  save = () => {
    const product = {
      size  : this.state.size,
      color : this.state.color,
      name  : this.state.name,
      price : this.state.price,
      image : this.state.image == "" ? 'https://imbindonesia.com/images/placeholder/camera.jpg' : this.state.image,
    }
    this.props.addProduct(product)
    Actions.listProduct()
  }
  // delete product in form
  remove = () => {
    if(this.isCreate){
        this.setState({
          image:  'https://imbindonesia.com/images/placeholder/camera.jpg',
          color:  "" ,
          size:    "" , 
          price:  "" , 
          name:    "" ,
          loader: false,
        })
        Actions.listProduct()
    }else{

      Alert.alert(
        'Remove Product',
        'Are you sure ?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Remove', onPress: () => {
            this.props.removeProduct(this.props.product.id)
            Actions.listProduct()
          }},
        ],
        {cancelable: false},
      );
     
    }
    
  }
  render() {
    return (
        <View style={{flex:1 }}>
            <View style={{flex:3 , paddingBottom:30}}> 
                 <Image style={{flex:1 , paddingHorizontal:-50}}
                    source={{uri : this.state.image}}
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
                  title={this.pictureButton}
                  onPress={() => this.takeAPicture()}
                  buttonStyle={style.transparentButton}
                  titleStyle={{fontSize:13}}
                />

            </View>
            <View style={{ flex:5}}>
            
                  <View style={{flex:1}}>
                          <Text style={style.label}>Product name</Text>
                          <TextInput  style={style.input} value={this.state.name}  onChangeText={data =>  this.setState({name:data}) }  placeholder='Name'/>
                  </View>
                  <View style={{flex:1}}>
                          <Text style={style.label}>Price</Text>
                          <TextInput  style={style.input} value={this.state.price} onChangeText={data =>  this.setState({price:data}) } placeholder='$00.00'/>
                  </View>
                  <View style={{flex:1 , flexDirection:"row" , justifyContent: 'space-between', alignItems:"center" }}>
                        <View style={{flex:1}}>
                            <Text style={style.label}>Color</Text>
                            <TextInput  style={style.input} value={this.state.color} onChangeText={data =>  this.setState({color:data}) } placeholder='Black'/>     
                        </View>
                        <View style={{flex:1}}>
                            <Text style={style.label}>Size</Text>
                            <TextInput  style={style.input}  value={this.state.size} onChangeText={data =>  this.setState({size:data}) }  placeholder='M'/>     
                        </View>
                  </View>
            
              <View style={{flex:1 , justifyContent:"flex-end",padding:20}}>
                <Button
                    title="Save"
                    onPress={() => this.save()}
                    buttonStyle={style.button}
                    titleStyle={{fontSize:15}}   
                />
                <TouchableOpacity style={{alignItems:"center" , padding:10}} onPress={() => { this.remove()}}>
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
  transparentButton:{
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            borderColor:"white", 
            borderWidth:3,
            borderRadius:30 , 
            paddingHorizontal:15, 
            marginHorizontal:50 , 
            position:"absolute" , 
            top:-60 , 
            left:140 , 
            
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

});
export default connect(mapStateToProps,{ addProduct,editProduct,removeProduct,renderProduct   } )(FormProduct);
