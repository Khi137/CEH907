import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/reducer/root.js';
import {thunk} from 'redux-thunk'; 
import { StyleProvider } from '@ant-design/cssinjs';
import { numberReducer } from './DemoRedux/redux/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) 
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StyleProvider hashPriority="high">
      <App />
    </StyleProvider>
  </Provider>
);
