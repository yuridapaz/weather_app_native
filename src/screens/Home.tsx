import { Text, View, StyleSheet, Linking } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
        <View>
          <View>
            <View>
              <Icon name='location-arrow' />
              <Text>City Name</Text>
            </View>
            <Text>Today 00:32 PM</Text>
          </View>
          <Text>24°</Text>
          <Text>Mostly Clear</Text>
          <View>
            <Text>720hpa</Text>
            <Text>32&</Text>
            <Text>12hkm/h</Text>
          </View>
        </View>
        <View>
          <Text>Today</Text>
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://google.com')}
          >
            Google
          </Text>
          <ScrollView horizontal>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Home;
