/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Welcome from './welcome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class JNMobile extends Component {
  render() {
    return (
        <Welcome />
    );
  }
}

AppRegistry.registerComponent('JNMobile', () => JNMobile);
