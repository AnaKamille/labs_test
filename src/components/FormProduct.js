import React, { Component } from 'react';
import { View, Text ,TextInput,SafeAreaView, StyleSheet ,TouchableOpacity , Image} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';


import { changeColor , changePrice , changeName , 
  changeImage , changeSize  , changeProduct,
  deleteProduct,renderProduct  } from '../actions/productActions' ;


class FormProduct extends Component {
  constructor(props) {
    super(props);

    console.log('FORM-PRODUCT ->' , this.props )
    this.isCreate = this.props.create 
    this.product = this.props.product 
    this.pictureButton = this.isCreate ? 'ADD PICTURE' : 'EDIT PICTURE'

    this.state = {
      avatarSource: {uri:'https://imbindonesia.com/images/placeholder/camera.jpg'}
    };
  }

  componentWillMount = () => {

    console.log('product, inside form' ,this.props.product )
    if(this.props.product ){
      this.props.renderProduct(this.props.product )
    }

  }

  
  takeAPicture = () => {

    const options = {
      title: 'Product Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.props.changeImage(response.uri )
        this.setState({
          avatarSource: source,
        });
      }
    })
  }
//Save the product in form
  save = () => {
    const product = {
      size  : this.props.size,
      color : this.props.color,
      name  : this.props.name,
      price : this.props.price,
      image : this.props.image.trim() == "" ? 'https://imbindonesia.com/images/placeholder/camera.jpg' : this.props.image,
    }
    this.props.changeProduct(product)
    console.log('lista' , this.props || this.props.productList );
  }

  // delete product in form
  delete = () => {

    this.props.deleteProduct(this.productId)
    alert("delete product");
  }

  render() {
    return (
        <View style={{flex:1 ,justifyContent:"center"}}>
            <View style={{flex:3 , paddingBottom:30}}> 
                 <Image style={{flex:1 , paddingHorizontal:-50}}
                    source={this.state.avatarSource}
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
            <View style={{padding:10 , flex:5}}>
         
              <View style={{flex:1}}>
                      <Text style={style.label}>Product name</Text>
                      <TextInput  style={style.input} value={this.props.name}  onChangeText={texto => {this.props.changeName(texto)}}  placeholder='Name'/>
              </View>
              <View style={{flex:1}}>
                      <Text style={style.label}>Price</Text>
                      <TextInput  style={style.input} value={this.props.price} onChangeText={texto => {this.props.changePrice(texto)}} placeholder='$00.00'/>
              </View>
              <View style={{flex:1 , flexDirection:"row" , justifyContent: 'space-between', alignItems:"center" }}>
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
                    onPress={() => this.save()}
                    buttonStyle={style.button}
                    titleStyle={{fontSize:15}}   
                />
                <TouchableOpacity style={{alignItems:"center" , padding:10}} onPress={() => { this.delete()}}>
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
  
  color: state.ProductReducer.color,
  price: state.ProductReducer.price,
  name: state.ProductReducer.name,
  image: state.ProductReducer.image,
  size:state.ProductReducer.size,
  productError: state.ProductReducer.productError,
  productLoader: state.ProductReducer.productLoader,
  pruductList: state.ProductReducer.productList

});

export default connect(mapStateToProps,{ changeColor , changePrice , changeName , 
                                         changeImage , changeSize  , changeProduct,deleteProduct,renderProduct  } )(FormProduct);
