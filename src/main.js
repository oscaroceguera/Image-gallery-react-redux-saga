import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import Gallery from './components/Gallery'
import reducer from './redcucers/reducer'

import {watchForLoadImages} from './sagas/watchForLoadImages';

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(watchForLoadImages))
);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
)
