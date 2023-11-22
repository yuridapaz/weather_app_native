import { Text, View, StyleSheet, Linking, Image } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SHADOWS, SIZES } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export class Home extends Component {
  render() {
    return (
      // <View style={{ flex: 1 }}>
      <SafeAreaView className='flex-1 bg-slate-400'>
        <StatusBar style='dark' />
        <Image
          blurRadius={90}
          source={require('../../assets/bg2.jpeg')}
          className='absolute w-full h-screen'
        />
        <View className='flex-1 p-4'>
          <View className='p-6 bg-[#81eaff30] rounded-2xl'>
            <Text className='text-lg text-right mb-8 text-white'>
              Today 00:32 PM
            </Text>
            <View className='flex justify-between items-center '>
              <View className='flex-row items-center'>
                <Icon
                  name='location-arrow'
                  style={styles.icon}
                />
                <Text className='text-white text-xl'>City Name</Text>
              </View>
            </View>
            <Text className='mb-6 mt-14 text-9xl text-center text-white'>
              24&deg;
            </Text>
            <Text className='text-2xl text-white text-center mb-8'>
              Mostly Clear
            </Text>
            <View className='flex-row justify-center mb-12 gap-8 '>
              <Text className='text-xl text-white'>H:24°</Text>
              <Text className='text-xl text-white'>L:18°</Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className='text-lg text-white'>720hpa</Text>
              <Text className='text-lg text-white'>32&</Text>
              <Text className='text-lg text-white'>12hkm/h</Text>
            </View>
          </View>
          <View>
            <View className='flex-row justify-between px-6 py-4'>
              <Text className='text-base text-white'>Today</Text>
              <Text
                onPress={() => Linking.openURL('http://google.com')}
                className='text-blue-600 text-base'
              >
                Next 7 days
              </Text>
            </View>
            {/* <FlatList /> */}

            <View className='p-2 justify-center items-center'>
              <Text className='text-sm mb-1 text-gray2'>00 PM</Text>
              <Text className='text-lg mb-1 '>00</Text>
              <Text className='text-2xl'>24°</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      // </View>

      // <View className='flex-1 relative'>
      //   {/* <StatusBar style='dark' /> */}
      //   {/* <Image
      //     blurRadius={70}
      //     source={require('../../assets/bg2.jpeg')}
      //     className='absolute w-full h-full'
      //     // style={{ position: 'absolute', width: '100%', height: '100%' }}
      //   /> */}
      //   <View
      //     // style={styles.temperatureContainer}
      //     className='bg-slate-50'
      //   >
      //     <View style={styles.headerContainer}>
      //       <View style={styles.headerContainerCities}>
      //         <Icon
      //           name='location-arrow'
      //           style={{
      //             marginRight: 10,
      //             fontSize: SIZES.medium,
      //             color: COLORS.primary,
      //           }}
      //         />
      //         <Text style={styles.locationText}>City Name</Text>
      //       </View>
      //       <Text style={styles.dateTimeStamp}>Today 00:32 PM</Text>
      //     </View>
      //     <Text
      //       style={{
      //         marginTop: SIZES.xLarge,
      //         marginBottom: SIZES.small,
      //         fontSize: SIZES.xxLarge * 2,
      //         textAlign: 'center',
      //       }}
      //     >
      //       24&deg;
      //     </Text>
      //     <Text
      //       // style={{
      //       //   textAlign: 'center',
      //       //   marginBottom: SIZES.small,
      //       //   fontSize: SIZES.large,
      //       // }}
      //       className='text-2xl '
      //     >
      //       Mostly Clear 234
      //     </Text>
      //     <View
      //       style={{
      //         flexDirection: 'row',
      //         justifyContent: 'center',
      //         marginBottom: SIZES.xLarge,
      //         gap: SIZES.medium,
      //       }}
      //     >
      //       <Text>H:24°</Text>
      //       <Text>L:18°</Text>
      //     </View>
      //     <View style={styles.temperatureInfo}>
      //       <Text>720hpa</Text>
      //       <Text>32&</Text>
      //       <Text>12hkm/h</Text>
      //     </View>
      //   </View>
      //   <View>
      //     <View
      //       style={{
      //         flexDirection: 'row',
      //         justifyContent: 'space-between',
      //         padding: SIZES.medium,
      //       }}
      //     >
      //       <Text>Today</Text>
      //       <Text
      //         style={{ color: 'blue' }}
      //         onPress={() => Linking.openURL('http://google.com')}
      //       >
      //         Next 7 days
      //       </Text>
      //     </View>
      //     {/* <FlatList /> */}

      //     <View
      //       style={{
      //         padding: SIZES.small,
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}
      //     >
      //       <Text
      //         style={{
      //           fontSize: SIZES.small,
      //           marginBottom: 8,
      //           color: COLORS.gray,
      //         }}
      //       >
      //         00 PM
      //       </Text>
      //       <Text style={{ fontSize: SIZES.medium, marginBottom: 8 }}>00</Text>
      //       <Text style={{ fontSize: SIZES.large }}>24°</Text>
      //     </View>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});

export default Home;
