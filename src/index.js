import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import createLogger from 'redux-logger'
import App from './components/App';

const middleware = [ thunk, createLogger() ]

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

