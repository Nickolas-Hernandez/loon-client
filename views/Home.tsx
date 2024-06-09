import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import DateDisplay from '../components/DateDisplay';

const Home = () => {
    return (
        <View>
            <Header />
            <DateDisplay />
        </View>
    );
}

export default Home;