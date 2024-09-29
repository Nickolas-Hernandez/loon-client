import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const MoonDisplay = () => {
    return (
        <View style={styles.section}>
          <Image
            source={require('../assets/moon-mock-up.png')}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        paddingVertical: 0, 
    },
});

export default MoonDisplay;