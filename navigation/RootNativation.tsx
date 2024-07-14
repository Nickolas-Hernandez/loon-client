import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookIcon from '../components/icons/BookIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import CrescentIcon from '../components/icons/CrescentIcon';

const RootNavigation = () => {
    const Tab = createBottomTabNavigator();
    
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
        // <View style={[styles.row, styles.nav]}>
        //     <BookIcon isActive={ view === 'tonight' ? true : false} />
        //     <CalendarIcon />
        //     <CrescentIcon />
        // </View>
    )
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

  export default RootNavigation;