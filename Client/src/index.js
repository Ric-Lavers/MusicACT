import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//ReduxForm
// hoc lets you bind Redux to React
import { Provider } from 'react-redux';
// Recieve action and update State(can be multiple)
import { reducer as formReducer } from 'redux-form';
// Store entire application state
import { createStore, combineReducers } from 'redux';

// define combineReducers
const rootReducer = combineReducers({
  form: formReducer
});

// central store
const store = createStore(rootReducer);

ReactDOM.render(
  // passing all the state store entire app
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
