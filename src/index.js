import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'; // Import combineReducers
import { rootReducer } from './redux/reducer/root.js';
import {thunk} from 'redux-thunk'; // Import default export 'thunk'
import { StyleProvider } from '@ant-design/cssinjs';
import { numberReducer } from './DemoRedux/redux/reducer'; // Import numberReducer

// Combine reducers
const rootReducerCombined = combineReducers({
  root: rootReducer,
  number: numberReducer, // Tên key 'number' sẽ là state của numberReducer
});

// DevTools extension setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with combined reducers and middleware
export const store = createStore(
  rootReducerCombined, // Sử dụng rootReducerCombined thay vì rootReducer
  composeEnhancers(applyMiddleware(thunk))
);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StyleProvider hashPriority="high">
      <App />
    </StyleProvider>
  </Provider>
);
