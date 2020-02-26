import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Counter extends Component{
  render(){
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Button title={'+'} onPress={this.props.onIncrement}/>
        <Button title={'-'} onPress={this.props.onDecrement}/>
        <Button title={'async +'} onPress={this.props.onAsyncIncrement}/>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}
