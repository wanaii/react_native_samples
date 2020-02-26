import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'

import { helloSaga } from './sagas'

// const store = createStore(reducer)
const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(helloSaga))
)

sagaMiddleware.run(helloSaga)
const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
