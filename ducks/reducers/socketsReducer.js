import {SAVE_SOCKETS} from '../actionTypes';

const initialState = {};

export const saveSockets = (sockets) => {
  return {
    type: SAVE_SOCKETS,
    payload: 'bob',
  };
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case `${SAVE_SOCKETS}`:
      console.log('payload', payload);
      return {...state, sockets: payload};
    default:
      return state;
  }
}
