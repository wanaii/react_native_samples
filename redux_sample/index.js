/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Gradient_button from './src/components/grad_button';
import Change_page from './src/pages/change_page';

AppRegistry.registerComponent(appName, () => Change_page);
