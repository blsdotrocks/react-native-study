import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Outros extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Aqui podem ser apresentadas informações sobre outros jogos desenvolvidos.
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