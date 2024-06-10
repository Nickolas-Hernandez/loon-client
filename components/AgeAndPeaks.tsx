import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AgeAndPeaks = () => {
    return (
    <View>
        <View style={[styles.section, styles.rowBetween]}>
            <Text style={styles.lowOpacityText}>Age</Text>
            <Text style={styles.text}>20.5</Text>
        </View>
        <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']}
        style={{height: 2}}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        >
            <View style={styles.horizontalLine} />
        </LinearGradient>
        <View style={[styles.section, styles.rowBetween]}>
            <Text style={styles.lowOpacityText}>Peaks</Text>
            <Text style={styles.text}>6:27 AM</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    section: {
        paddingVertical: 20,
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: 'white',
        fontSize: 14
    },
    lowOpacityText: {
        fontFamily: 'Inter-Regular',
        color: 'white',
        opacity: 0.5,
        fontSize: 12
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    horizontalLine: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        // borderBottomColor: 'white',
        alignSelf: 'stretch'
    },
    riseAndSet: {
        flexDirection: 'row'
    },
});

export default AgeAndPeaks;
