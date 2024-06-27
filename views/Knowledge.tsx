import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Knowledge = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Knowledge View</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        paddingHorizontal: 50
    },
    text: {
        color: 'white',
        fontFamily: 'Inter-Regular'
    }
});

export default Knowledge;