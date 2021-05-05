import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home1 from '../screens/Home1/Home1';
import Home2 from '../screens/Home2/Home2';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden></StatusBar>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={Home1} />
        <Stack.Screen name="Home2" component={Home2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
