import React from 'react'
import {Router , Scene, Stack} from 'react-native-router-flux'
//Screens

import EditProduct from './pages/editProduct'
import ListProduct from './pages/listProduct';
import CreateProduct from './pages/createProduct';
import Login from './pages/login'


export default props =>(
    <Router>
        
        <Scene key="root"  >
            <Scene key="editProduct" component={EditProduct}    title="Edit Product"  />
            <Scene key="createProduct"    component={CreateProduct}  title=" "  />
            <Scene key="listProduct"  component={ListProduct} title="List Product" hideNavBar /> 
            <Scene key="login" initial       component={Login}   hideNavBar />
        </Scene>
    </Router>
)