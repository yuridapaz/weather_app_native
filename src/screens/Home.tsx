import { Text, View } from 'react-native';
import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
