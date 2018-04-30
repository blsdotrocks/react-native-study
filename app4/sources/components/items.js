import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Items extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
  			   <Image style={{width: 100, height: 100}} source={{uri:this.props.item.foto}}/>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.containerTextTitle}>{this.props.item.titulo}</Text>
    			<Text style={styles.containerTextPrice}>R$ {this.props.item.valor}</Text>
    			<Text style={styles.containerTextDetail}>{this.props.item.local_anuncio}</Text>
    			<Text style={styles.containerTextDetail}>{this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },

  containerImage: {
    width: 102,
    height: 102
  },

  containerText: {
    marginLeft: 20,
    flex: 1
  },

  containerTextTitle: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },

  containerTextPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  containerTextDetail: {
    fontSize: 16
  }
});
