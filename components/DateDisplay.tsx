import React, { useState } from 'react';
import {Stylesheet, View, Text } from 'react-native';

const DateDisplay = () => {
    return (   
        <View style={styles.section}>
           <Text style={styles.text}>March 3 2024</Text>
           <Text style={styles.text}>New Moon / 16%</Text>
         </View>
    )
}

const styles = {
    section: {
        paddingVertical: 20,
        alignItems: 'center'
      },
      text: {
        color: 'white',
      },
}

export default DateDisplay;