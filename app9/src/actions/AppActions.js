import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import { CONTATO_EMAIL, ADICIONA_CONTATO_ERRO, ADICIONA_CONTATO_SUCESSO } from './types';

export const contatoEmail = texto => {
  return {
    type: CONTATO_EMAIL,
    payload: texto,
  };
};

export const adicionaContato = email => {
  return dispatch => {
    let emailB64 = b64.encode(email);
    firebase.database().ref(`/contatos/${emailB64}`).once('value')
      .then(snapshot => {
        if(snapshot.val()) {
          const dadosUsuario = _.first(_.values(snapshot.val()));
          const { currentUser } = firebase.auth();
          let emailUsuarioB64 = b64.encode(currentUser.email);
          firebase.database()
            .ref(`/usuario_contatos/${emailUsuarioB64}`)
            .push({ email, nome: dadosUsuario.nome })
            .then(() => adicionaContatoSucesso(dispatch))
            .catch(erro => adicionaContatoErro(erro.message, dispatch))
        }
        else {
          dispatch({
            type: ADICIONA_CONTATO_ERRO,
            payload: 'E-mail não cadastrado',
          });
        }
      });
  }
};

const adicionaContatoSucesso = dispatch => (
  dispatch({
    type: ADICIONA_CONTATO_SUCESSO,
    payload: true,
  })
);

const adicionaContatoErro = (erro, dispatch) => (
  dispatch({
    type: ADICIONA_CONTATO_ERRO,
    payload: erro,
  })
);

export const habilitaInclusaoContato = () => ({
  type: ADICIONA_CONTATO_SUCESSO,
  payload: false,
});
