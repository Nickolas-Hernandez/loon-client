import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './views/Home';
import Loon from './components/icons/loon';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Light': require('./assets/fonts/inter/Inter-Light.ttf'),
    'Inter-Regular': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
  });

  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen 
                  name="Home" 
                  component={Home} 
                  options={{ 
                      headerTitle: (props) => <Loon />, 
                      headerStyle: {
                        backgroundColor: '#000',
                        borderBottomWidth: 0,
                        shadowOpacity: 0,
                        elevation: 0,
                      }
                  }}
              />
          </Tab.Navigator>
      </NavigationContainer>
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
});