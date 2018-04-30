import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

const gerarNumero = () => {
  let numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Gerador de números aleatórios</Text>
        <Button
          onPress={gerarNumero}
          title="Gerar Número"
        />
      </View>
    );
  }
}