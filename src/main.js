import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import Gallery from './Gallery'
import reducer from './reducer'

import {loadImages} from './sagas';

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(loadImages))
);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
)
