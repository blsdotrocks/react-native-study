import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default props => (
  <ImageBackground style={styles.bg} source={require('../imgs/bg.png')}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>seja bem vindo</Text>
        <Image source={require('../imgs/logo.png')}/>
      </View>
      <View style={styles.content}>
        <Button
          title='fazer login'
          color='#115e54'
          onPress={() => {Actions.login();}}
        />
      </View>
      <View></View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bg: {
		flex: 1
	},

  container: {
    flex: 1,
    padding: 15
  },

  title: {
    fontSize: 25,
    color: '#fff'
  },

  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    flex: 1
  }
});
