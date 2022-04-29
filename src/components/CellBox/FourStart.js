import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

const FourStar = ({ backgroundColor }) => {
    return (
        <View style={[styles.cellBoxWrapper, { backgroundColor }]} >
            <Text style={styles.TextIcon} >⭐</Text>
        </View>
    )
}

export default FourStar

const styles = StyleSheet.create({
    cellBoxWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextIcon: {
        color: 'red',
        fontSize: 16,
    }
})