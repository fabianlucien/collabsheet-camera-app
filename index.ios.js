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
var Home = require('./ImageGallery');
class ListViewDemo extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column', flex: 1, padding: 20}}>
        <View style={{backgroundColor: 'blue', flex: 0.5}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
      </View>
      // <Home>
      // </Home>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CameraApp', () => ListViewDemo);
