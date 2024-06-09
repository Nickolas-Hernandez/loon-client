import React, { useState } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { currentDate } from '../utils/date';

const DateDisplay = () => {
    return (   
<View style={styles.section}>
    <Text style={styles.smallText }>{currentDate()}</Text>
    <View style={{'flexDirection': 'row', 'marginTop': 20}}>
        <Text style={styles.text}>New Moon</Text>
        <Text style={styles.lowOpacityText}> / 16%</Text>
    </View>
</View>
    )
}

const styles = StyleSheet.create({
    section: {
        paddingVertical: 20,
        alignItems: 'center'
      },
      text: {
        color: 'white',
        fontFamily: 'Inter-Light',
        fontSize: 22
      },
      lowOpacityText: {
        color: 'white',
        fontFamily: 'Inter-Light',
        opacity: 0.5,
        fontSize: 22
      },
      smallText: {
        color: 'white',
        fontFamily: 'Inter-Light',
        opacity: 0.5,
        fontSize: 12
      }
})

export default DateDisplay;