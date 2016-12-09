import 'babel-polyfill'

import React from 'react'
import ReactDom from 'react-dom'
import Gallery from './Gallery'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

import { Provider } from 'react-redux'

ReactDom.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
)
