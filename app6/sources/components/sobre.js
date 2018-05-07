/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Sobre extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Aqui podem ser apresentadas informações sobre o jogo.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61bd8c'
  }
});