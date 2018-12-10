/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './Navigator';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <AppNavigator/>
    );
  }
}

