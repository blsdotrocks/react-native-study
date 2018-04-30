import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

import cara from "../images/moeda_cara.png";
import coroa from "../images/moeda_coroa.png";

export default class Outros extends Component {
  constructor(props) {
    super(props);
    this.state = { resultado: ''};
  }

  componentWillMount () {
    const num = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';

    if (num === 0) {
      caraOuCoroa = 'cara';
    } else {
      caraOuCoroa = 'coroa';
    }

    this.setState({resultado: caraOuCoroa});
  }

  render() {
    if (this.state.resultado === 'cara') {
      return (
        <View style={styles.container}>
          <Image source={cara}/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image source={coroa}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61bd8c',
    justifyContent: 'center',
    alignItems: 'center'
  }
});