import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RiseAndSet = () => {
    return (
        <View style={[styles.riseAndSet, styles.rowBetween]}>
            <View style={styles.alignCenter}>
                <View style={styles.row}>
                    <Text style={styles.text}>1:42</Text>
                    <Text style={styles.text}>AM</Text>
                </View>
                <Text style={styles.lowOpacityText}>Rises</Text>
            </View>
            <View style={styles.alignCenter}>
                <View style={styles.row}>
                    <Text style={styles.text}>11:12</Text>
                    <Text style={styles.text}>AM</Text>
                </View>
                <Text style={styles.lowOpacityText}>Sets</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    riseAndSet: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 50
    },
    text: {
        fontFamily: 'Inter-Light',
        fontSize: 20,
        color: 'white',
    },
    lowOpacityText: {
        fontFamily: 'Inter-Light',
        fontSize: 12,
        color: 'white',
        opacity: 0.5,
        textTransform: 'uppercase',
        paddingTop: 6
    },
    row: {
        flexDirection: 'row'
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    alignCenter: {
        alignItems: 'center'
    },
})

export default RiseAndSet;