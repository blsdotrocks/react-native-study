import { CONTATO_EMAIL } from '../actions/types';

const INITIAL_STATE = {
  email: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTATO_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};
