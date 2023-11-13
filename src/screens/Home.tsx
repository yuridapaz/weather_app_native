import { Text, View, StyleSheet, Linking, Image } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SHADOWS, SIZES } from '../constants';
import { StatusBar } from 'expo-status-bar';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style='dark' />
        <Image
          blurRadius={70}
          source={require('../../assets/bg2.jpeg')}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
        <View style={styles.temperatureContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContainerCities}>
              <Icon
                name='location-arrow'
                style={{
                  marginRight: 10,
                  fontSize: SIZES.medium,
                  color: COLORS.primary,
                }}
              />
              <Text style={styles.locationText}>City Name</Text>
            </View>
            <Text style={styles.dateTimeStamp}>Today 00:32 PM</Text>
          </View>
          <Text
            style={{
              marginTop: SIZES.xLarge,
              marginBottom: SIZES.small,
              fontSize: SIZES.xxLarge * 2,
              textAlign: 'center',
            }}
          >
            24&deg;
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginBottom: SIZES.small,
              fontSize: SIZES.large,
            }}
          >
            Mostly Clear
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: SIZES.xLarge,
              gap: SIZES.medium,
            }}
          >
            <Text>H:24°</Text>
            <Text>L:18°</Text>
          </View>
          <View style={styles.temperatureInfo}>
            <Text>720hpa</Text>
            <Text>32&</Text>
            <Text>12hkm/h</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: SIZES.medium,
            }}
          >
            <Text>Today</Text>
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('http://google.com')}
            >
              Next 7 days
            </Text>
          </View>
          {/* <FlatList /> */}

          <View
            style={{
              padding: SIZES.small,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: SIZES.small,
                marginBottom: 8,
                color: COLORS.gray,
              }}
            >
              00 PM
            </Text>
            <Text style={{ fontSize: SIZES.medium, marginBottom: 8 }}>00</Text>
            <Text style={{ fontSize: SIZES.large }}>24°</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    position: 'relative',
    // backgroundColor: '#a8a0a0',
  },
  temperatureContainer: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#18bcdd',
    borderRadius: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainerCities: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontWeight: '500',
  },
  dateTimeStamp: {
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  temperatureInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temperatureView: {
    backgroundColor: COLORS.offwhite,
    borderRadius: 12,
    padding: SIZES.small,
  },
});

export default Home;
