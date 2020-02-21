import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Gradient_button extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={null}
        onPress={this.props.press_action}
      >
        <LinearGradient
          colors={['#ffc600', '#fd443f']}
          style={{
            height: 40,
            width: 150,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginButton: 10,
          }}>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              fontFamily: 'Nimbus Sans',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#FFFFFF',
              marginLeft: 15,
              marginRight: 15,
            }}>
            {this.props.button_text}
          </Text>
          <View style={{ flex: 1 }} />
        </LinearGradient>
      </TouchableHighlight>
    );
  }
}
