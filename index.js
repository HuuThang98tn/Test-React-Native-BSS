/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeList from './src/HomeList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeList);
