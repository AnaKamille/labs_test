import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Provider} from 'react-redux' 
import {createStore,applyMiddleware} from 'redux';

import { PersistGate } from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
import { persistor, store } from './store';

//handle Async 
import ReduxThunk from "redux-thunk"

import Routes from "./Routes"
import reducers from  "./reducers"



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
   console.disableYellowBox = true
 }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<View style={{justifyContent:"center", alignItems:"center"}}><Text>Loading...</Text></View>} persistor={persistor}>
            <Routes/>
        </PersistGate>
      </Provider>
    
    );
  }
}
