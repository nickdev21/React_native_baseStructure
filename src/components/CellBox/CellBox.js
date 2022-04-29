import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

const CellBox = ({backgroundColor}) => {
    return (
        <View style={[styles.cellBoxWrapper, {backgroundColor}]} >
        </View>
    )
}

export default CellBox

const styles = StyleSheet.create({
    cellBoxWrapper: {
        flex: 1,
        backgroundColor: colors.white
    }
})