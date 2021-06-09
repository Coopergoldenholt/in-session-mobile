import {SAVE_USER} from '../actionTypes';

const initialState = {};

export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case `${SAVE_USER}`:
      return {...state, user: payload};
    default:
      return state;
  }
}
