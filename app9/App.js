import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './src/routes';
import reducers from './src/reducers/';

export default class App extends Component {
  componentWillMount() {
    let config = {
      apiKey: "AIzaSyDWf9YcFRZpBRJWzAdwti6QJdhaRu7X3ZU",
      authDomain: "configuracaofirebasereac-eeec9.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-eeec9.firebaseio.com",
      projectId: "configuracaofirebasereac-eeec9",
      storageBucket: "configuracaofirebasereac-eeec9.appspot.com",
      messagingSenderId: "791509885486"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes/>
      </Provider>
    );
  }
}
