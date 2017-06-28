// index.ios.js - place code in here for iOS.

// import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a Component with JSX
const App = () => (
  <Text>Some Text</Text>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
