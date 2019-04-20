import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Provider} from 'react-redux' 
import {createStore,applyMiddleware} from 'redux';

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

  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
          <Routes/>
      </Provider>
    
    );
  }
}
