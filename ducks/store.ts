import {createStore, combineReducers} from 'redux';
import socketsReducer from './reducers/socketsReducer';
import usersReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  sockets: socketsReducer,
  user: usersReducer,
});

const store = createStore(rootReducer);

export default store;
