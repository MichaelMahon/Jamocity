import React from 'react'
import {StyleSheet} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import thunkMiddleware from 'redux-thunk'

const logger = store => next => action => {
  //console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}


//let store = createStore(todoApp)
let store = createStore(
  todoApp,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(logger, crashReporter, thunkMiddleware)
)



render(
  <Provider store={store}>
    <App>

      </App>
  </Provider>,
  document.getElementById('index')
)

