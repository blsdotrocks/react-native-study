import firebase from 'firebase';
import b64 from 'base-64';
import { CONTATO_EMAIL } from './types';

export const contatoEmail = texto => {
  return {
    type: CONTATO_EMAIL,
    payload: texto,
  };
};

export const adicionaContato = email => {
  let emailB64 = b64.encode(email);
  firebase.database().ref(`/contatos/${emailB64}`).once('value')
    .then(spnashot => {
      console.log(spnashot.val());
    });
  return {
    type: ''
  }
}
