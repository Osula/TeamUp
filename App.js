import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './screens/home';
import App from './screens/test';

export default class MainApp extends React.Component {
  render() {
    return <Home />;
  }
}