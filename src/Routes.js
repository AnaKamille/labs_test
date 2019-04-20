import React from 'react'
import {Router , Scene, Stack} from 'react-native-router-flux'
//Screens
import splash from './pages/splash';
import editProduct from './pages/formProduct'
import listProduct from './pages/listProducts';
import createProduct from './pages/listProducts';
import login from './pages/welcome'


export default props =>(
    <Router>
        
        <Scene key="root"  >
            <Scene key="splash"  initial component={splash} hideNavBar/>
            <Scene key="formProduct" component={editProduct}    title="Edit Product"  />
            <Scene key="formProduct" component={createProduct}  title="Product"  />
            <Scene key="listProduct" component={listProduct} title="List Product"  /> 
            <Scene key="login"       component={login}   hideNavBar />
        </Scene>
    </Router>
)