import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import logo from "../images/logo.png";
import btnJogar from "../images/botao_jogar.png";
import sobre from "../images/sobre_jogo.png";
import outrosJogos from "../images/outros_jogos.png";

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.apresentacao}>
          <Image source={logo}/>
          <TouchableOpacity
            onPress={() => {Actions.resultado();}}>
            <Image source={btnJogar}/>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {Actions.sobre();}}>
            <Image source={sobre}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {Actions.outros();}}>
            <Image source={outrosJogos}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61bd8c'
  },

  apresentacao: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});