/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

import TabScreen from './tabscreen';

const Router = createRouter(() => ({
  tabscreen: () => TabScreen
}));

export default class JNMobile extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('tabscreen')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('JNMobile', () => JNMobile);
