import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDWf9YcFRZpBRJWzAdwti6QJdhaRu7X3ZU",
      authDomain: "configuracaofirebasereac-eeec9.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-eeec9.firebaseio.com",
      projectId: "configuracaofirebasereac-eeec9",
      storageBucket: "",
      messagingSenderId: "791509885486"
    };
    firebase.initializeApp(config);
  }

  cadastrarUsuario() {
    const email = "bruno@gmail.com";
    const password = "7g2jm13";
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      alert(error.message);
    });
  }

  entrarUsuario() {
    const email = "bruno@gmail.com";
    const password = "7g2jm13";
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      alert(error.message);
    });
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();
    usuario.onAuthStateChanged((usuarioAtual) => {
      if(usuarioAtual) alert('têm alguém aqui');
      else alert('não têm ninguém aqui');
    });


    /*
    const usuarioAtual = usuario.currentUser;
    if(usuarioAtual) alert('ok');
    else alert('não têm ninguém aqui');*/
  }

  desconectarUsuario() {
    firebase.auth().signOut().then().catch(error => {
      alert(error.message);
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => {this.cadastrarUsuario();}}
          title='cadastrar usuário'
          accessibilityLabel='cadastrar usuário'
          />
        <Button
          onPress={() => {this.entrarUsuario();}}
          title='entrar usuário'
          accessibilityLabel='entrar usuário'
          />
        <Button
          onPress={() => {this.verificarUsuarioLogado();}}
          title='verificar usuário logado'
          accessibilityLabel='verificar usuário logado'
          />
        <Button
          onPress={() => {this.desconectarUsuario();}}
          title='desconectar usuário'
          accessibilityLabel='desconectar usuário'
          />
        <Text></Text>
      </View>
    );
  }
}
