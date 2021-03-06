/**
 * React Native Easy Gestures Example
 * https://github.com/keske/react-native-easy-gestures
 *
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

// Component
import Gestures from './lib/';

// Photo
const photo = require('./static/photo.jpg');

// Disable yellow box
console.disableYellowBox = true;

export default class GesturesExample extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Gestures>
          <Image
            source={photo}
            style={{
              width: 300,
              height: 400,
            }}
          />
        </Gestures>
      </View>
    );
  }
}

AppRegistry.registerComponent('GesturesExample', () => GesturesExample);
