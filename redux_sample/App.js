/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Change_page from './src/pages/change_page';
import Display_page from './src/pages/display_page';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <Gradient_button
//         button_text={'click me'}
//         press_action={() => Alert.alert("wdawdwad")}/>
//     </>
//   );
// };

const MainNavigator = createStackNavigator({
  CHANGE: {screen: Change_page, navigationOptions: {headerShown: false}},
  DISPLAY: {screen: Display_page, navigationOptions: {headerShown: false}},
});

const App = createAppContainer(MainNavigator);

export default App;
