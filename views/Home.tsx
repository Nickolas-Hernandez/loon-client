import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DateDisplay from '../components/DateDisplay';
import MoonDisplay from '../components/MoonDisplay';
import AgeAndPeaks from '../components/AgeAndPeaks';
import RiseAndSet from '../components/RiseAndSet';


const Home = () => {
    return (
        <View style={styles.container}>
            <DateDisplay />
            <MoonDisplay />
            <AgeAndPeaks />
            <RiseAndSet />
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
}); 

export default Home;