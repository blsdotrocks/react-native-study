/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import ListItems from './sources/components/listitems';

export default class App extends Component {
  render() {
    return (
      <ListItems />
    );
  }
}
