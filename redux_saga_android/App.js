import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import Main from './src/main';
import rootSaga from './sagas';
import reducer from './reducers';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// const action = type => store.dispatch({type});
// sagaMiddleware.run(rootSaga);

export default class App extends Component<Props>{
  render(){
    return (
      // <Provider store={store}>
        <Main/>
      // </Provider>
    );
  }
}
