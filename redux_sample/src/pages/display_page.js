import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import Gradient_button from '../components/grad_button';

export default class Display_page extends Component {
  render(){
    return (
      <View
        style={{
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Gradient_button
            button_text={'+'}
            press_action={() => Alert.alert("add_pressed")}/>
          <Gradient_button
            button_text={'-'}
            press_action={() => Alert.alert("minus_pressed")}/>
        </View>
        <Gradient_button
          button_text={'next'}
          press_action={() => Alert.alert("minus_pressed")}/>
      </View>
    );
  }
};
