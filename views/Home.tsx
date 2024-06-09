import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import DateDisplay from '../components/DateDisplay';
import MoonDisplay from '../components/MoonDisplay';
import AgeAndPeaks from '../components/AgeAndPeaks';
// import RiseAndSet from '../components/RiseAndSet';


const Home = () => {
    return (
        <View>
            <Header />
            <DateDisplay />
            <MoonDisplay />
            <AgeAndPeaks />
        </View>
    );
}

export default Home;