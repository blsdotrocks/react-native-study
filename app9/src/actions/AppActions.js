import { CONTATO_EMAIL } from './types';

export const contatoEmail = texto => {
  return {
    type: CONTATO_EMAIL,
    payload: texto,
  };
};
