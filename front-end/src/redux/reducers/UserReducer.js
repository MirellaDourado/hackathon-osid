import { USER_CPF } from '../actions';

const INITIAL_STATE = {
  cpf: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_CPF:
    return {
      ...state,
      cpf: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
