import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducers/';

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <Provider
      store={createStore(reducer)}
    >
      <App />
    </Provider>,
    document.querySelector('.container'),
  );
};

render();
store.subscribe(render);
