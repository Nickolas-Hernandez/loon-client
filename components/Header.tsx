import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
          <Image
            source={require('../assets/loon.png')}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      paddingVertical: 20,
      alignItems: 'center'
    },
})

export default Header;