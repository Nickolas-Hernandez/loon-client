import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Home from './views/Home';
import Calendar from './views/Calendar';
import Knowledge from './views/Knowledge';
import Loon from './components/icons/loon';
import BookIcon from './components/icons/BookIcon';
import CalendarIcon from './components/icons/CalendarIcon';
import CrescentIcon from './components/icons/CrescentIcon';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Light': require('./assets/fonts/inter/Inter-Light.ttf'),
    'Inter-Regular': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
  });

  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
          <Tab.Navigator
            id="main-nav"
            initialRouteName='Home'
            screenOptions={({ route }): BottomTabNavigationOptions => ({
              tabBarIcon: ({focused, color, size}) => {
                let IconComponent: React.FC<{ isActive: boolean; size: number }> | undefined;

                switch (route.name) {
                  case 'Home':
                    IconComponent = CrescentIcon;
                    break;
                  case 'Calendar':
                    IconComponent = CalendarIcon;
                    break;
                  case 'Knowledge':
                    IconComponent = BookIcon;
                    break;
                  default:
                    IconComponent = undefined;
                }
      
                if (!IconComponent) {
                  return null;
                }

                return <IconComponent isActive={focused} size={size} />;
              },
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: '#000',
              },
            })}
          >
              <Tab.Screen 
                  name="Calendar" 
                  component={Calendar} 
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
              <Tab.Screen 
                  name="Knowledge" 
                  component={Knowledge} 
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