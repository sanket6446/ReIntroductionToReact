import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, appliMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import shopReducer from './store/reducer'

import App from './App.js';

const store = createStore(shopReducer, appliMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
 document.getElementById('root'))