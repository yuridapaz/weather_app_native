import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Home2 from '../screens/Search';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../screens/Search';
const { Navigator, Screen } = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: '#0091EA',
  inactiveTintColor: 'gray',
  style: { backgroundColor: 'white' },
};

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          tabBarStyle: {
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#0091EA',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Screen
          name='location'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name='location-arrow'
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Screen
          name='search'
          component={Home2}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name='search'
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Screen
          name='favorites'
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name='heart-o'
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#837575',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
