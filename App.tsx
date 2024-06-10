import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './views/Home';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Light': require('./assets/fonts/inter/Inter-Light.ttf'),
    'Inter-Regular': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
  });

  // const [view, setView] = useState('tonight')

  const Tab = createBottomTabNavigator();

  return (
    // <View style={styles.container}>
      // <Home /> 
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Home" component={Home} />
          </Tab.Navigator>
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
    color: 'white',
    paddingHorizontal: 50
  },
  section: {
    paddingVertical: 20,
    alignItems: 'center'
  },
  text: {
    color: 'white',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  horizontalLine: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: 'white',
    alignSelf: 'stretch'
  },
  riseAndSet: {
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row'
  },
  alignCenter: {
    alignItems: 'center',
  },
  nav: {
    // marginTop: -400, 
  }
});