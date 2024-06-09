import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import BookIcon from './components/icons/BookIcon';
import CalendarIcon from './components/icons/Calendar';
import CrescentIcon from './components/icons/Crescent';
import Home from './views/Home';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Light': require('./assets/fonts/inter/Inter-Light.ttf'),
    'Inter-Regular': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
  });

  const [view, setView] = useState('tonight')

  return (
      <View style={styles.container}>
    <Home />
      </View>
  );
       {/* <View style={styles.container}>
         <View style={styles.section}>
           <Text style={styles.text}>March 3 2024</Text>
           <Text style={styles.text}>New Moon / 16%</Text>
         </View>
         <View style={styles.section}>
          <Image
  //           source={require('./assets/moon-mock-up.png')}
  //         />
  //       </View>
  //       <View>
  //         <View style={[styles.section, styles.rowBetween]}>
  //           <Text style={styles.text}>DAY</Text>
  //           <Text style={styles.text}>4 - 5</Text>
  //         </View>
  //         <LinearGradient
  //           colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']}
  //           style={{height: 2}}
  //           start={{ x: 0, y: 0.5 }}
  //           end={{ x: 1, y: 0.5 }}
  //         >
  //           <View style={styles.horizontalLine}/>
  //         </LinearGradient>
  //         <View style={[styles.section, styles.rowBetween]}>
  //           <Text style={styles.text}>AGE</Text>
  //           <Text style={styles.text}>2.8</Text>
  //         </View>
  //       </View>
  //       <View style={[styles.riseAndSet, styles.rowBetween]}>
  //         <View style={styles.alignCenter}>
  //           <Image 
  //             source={require('./assets/carrott.png')}
  //             style={{
  //               marginBottom: 10
  //             }}
  //           />
  //           <View style={styles.row}>
  //             <Text style={styles.text}>10:14</Text>
  //             <Text style={styles.text}>AM</Text>
  //           </View>
  //         </View>
  //         <View style={styles.alignCenter}>
  //           <Image 
  //             source={require('./assets/carrott.png')}
  //             style={{
  //               marginBottom: 10,
  //               transform: [{rotate: '180deg'}]
  //             }}
  //           />
  //           <View style={styles.row}>
  //             <Text style={styles.text}>10:14</Text>
  //             <Text style={styles.text}>AM</Text>
  //           </View>
  //         </View>
  //       </View>
  //       <View style={[styles.row, styles.nav]}>
  //         <BookIcon isActive={ view === 'tonight' ? true : false} />
  //         <CalendarIcon />
  //         <CrescentIcon />
  //       </View>
  //     </View>
  //   </View> */}
  // );
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