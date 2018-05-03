import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';
import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERROR,
  LOGIN_SUCESSO,
  LOGIN_ERROR,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO
} from './types';

export const modificaEmail = (input) => {
  return {
    type: MODIFICA_EMAIL,
    payload: input
  }
}

export const modificaSenha = (input) => {
  return {
    type: MODIFICA_SENHA,
    payload: input
  }
}

export const modificaNome = (input) => {
  return {
    type: MODIFICA_NOME,
    payload: input
  }
}

export const cadastrarUsuario = ({nome, email, senha}) => {
  return dispatch => {
    dispatch({type: CADASTRO_EM_ANDAMENTO});
    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(user => {
        emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`).push({nome}).then(value => {
          cadastrarUsuarioSucesso(dispatch)
        });
      })
      .catch(error => cadastrarUsuarioErro(error, dispatch));
  }
}

const cadastrarUsuarioSucesso = (dispatch) => {
  dispatch({
    type: CADASTRO_USUARIO_SUCESSO
  });
  Actions.boasVindas();
}

const cadastrarUsuarioErro = (error, dispatch) => {
  dispatch({
    type: CADASTRO_USUARIO_ERROR,
    payload: error.message
  });
}

export const autenticarUsuario = ({email, senha}) => {
  return dispatch => {
    dispatch({type: LOGIN_EM_ANDAMENTO});
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(value => loginSucesso(dispatch))
    .catch(error => loginErro(error, dispatch));
  }
}

const loginSucesso = (dispatch) => {
  dispatch({
    type: LOGIN_SUCESSO
  });
  Actions.principal();
}

const loginErro = (error, dispatch) => {
  dispatch({
    type: LOGIN_ERROR,
    payload: error.message
  });
}
