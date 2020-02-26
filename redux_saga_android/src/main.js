import React, {Component} from 'react';
import {Alert, View} from 'react-native';
import Counter from './counter';
import reducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import { connect } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware(rootSaga());
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});

const mapStateToProps = state => ({

})

export default class Main extends Component{
  componentDidMount = () => {
    store.subscribe(() =>
      this.setState({ value: store.getState() }));
  }

  render(){
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Counter
          value={store.getState()}
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')}
          onAsyncIncrement={() => action('INCREMENT_ASYNC')}
        />
      </View>
    );
  }
}
