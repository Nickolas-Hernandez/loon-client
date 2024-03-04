import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          source={require('./assets/loon.png')}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>March 3 2024</Text>
        <Text style={styles.text}>New Moon / 16%</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require('./assets/moon-mock-up.png')}
        />
      </View>
      <View>
        <View style={[styles.section, styles.rowBetween]}>
          <Text style={styles.text}>DAY</Text>
          <Text style={styles.text}>4 - 5</Text>
        </View>
        <View style={styles.horizontalLine}/>
        <View style={[styles.section, styles.rowBetween]}>
          <Text style={styles.text}>AGE</Text>
          <Text style={styles.text}>2.8</Text>
        </View>
      </View>
      <View style={[styles.riseAndSet, styles.rowBetween]}>
        <View style={styles.alignCenter}>
          <Image 
            source={require('./assets/carrott.png')}
            style={{
              marginBottom: 10
            }}
          />
          <View style={styles.row}>
            <Text style={styles.text}>10:14</Text>
            <Text style={styles.text}>AM</Text>
          </View>
        </View>
        <View style={styles.alignCenter}>
          <Image 
            source={require('./assets/carrott.png')}
            style={{
              marginBottom: 10,
              transform: [{rotate: '180deg'}]
            }}
          />
          <View style={styles.row}>
            <Text style={styles.text}>10:14</Text>
            <Text style={styles.text}>AM</Text>
          </View>
        </View>
      </View>
    </View>
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
    borderBottomColor: 'white',
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
  }
});