import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import store from './ducks/store';

import Navigator from './routes/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
