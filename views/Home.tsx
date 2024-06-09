import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import DateDisplay from '../components/DateDisplay';
import MoonDisplay from '../components/MoonDisplay'


const Home = () => {
    return (
        <View>
            <Header />
            <DateDisplay />
            <MoonDisplay />
        </View>
    );
}

export default Home;