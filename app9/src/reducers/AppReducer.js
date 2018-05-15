import { CONTATO_EMAIL, ADICIONA_CONTATO_ERRO, ADICIONA_CONTATO_SUCESSO } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  cadastro_resultado_txt_erro: '',
  cadastro_resultado_inclusao: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTATO_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case ADICIONA_CONTATO_ERRO:
      return {
        ...state,
        cadastro_resultado_txt_erro: action.payload,
        email: '',
      };

    case ADICIONA_CONTATO_SUCESSO:
      return {
        ...state,
        cadastro_resultado_inclusao: action.payload,
        email: '',
      };

    default:
      return state;
  }
};
