import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { BLUE, GREEN, RED, YELLOW } from '../../constants/constant'

const Dice = ({ isRolling, turn, onDiceRoll, diceNumber }) => {

    // let turn = GREEN;
    // let isRolling = false;

    let color = turn === RED ? colors.red : turn === YELLOW ? colors.yellow : turn === GREEN ? colors.green : turn === BLUE ? colors.blue : '#000';

    const RenderSurfaceOne = () => (
        <View style={styles.diceDot} />
    )
    const RenderSurfaceTwo = () => (
        <View>
            <View style={styles.diceDot} />
            <View style={styles.diceDot} />
        </View>
    )
    const RenderSurfaceThree = () => (
        <View>
            <View style={styles.diceDot} />
            <View style={styles.diceDot} />
            <View style={styles.diceDot} />
        </View>
    )
    const RenderSurfaceFour = () => (
        <View style={styles.ForFourDot} >
            {RenderSurfaceTwo()}
            {RenderSurfaceTwo()}
        </View>
    )
    const RenderSurfaceFive = () => (
        <View style={styles.forFiveDot} >
            {RenderSurfaceTwo()}
            {RenderSurfaceOne()}
            {RenderSurfaceTwo()}
        </View>
    )
    const RenderSurfaceSix = () => (
        <View style={styles.forSixDot} >
            {RenderSurfaceThree()}
            {RenderSurfaceThree()}
        </View>
    )



    const RenderDiceSurface = (diceNumber) => {
        switch (diceNumber) {
            case 1:
                return RenderSurfaceOne()
            case 2:
                return RenderSurfaceTwo()
            case 3:
                return RenderSurfaceThree()
            case 4:
                return RenderSurfaceFour()
            case 5:
                return RenderSurfaceFive()
            case 6:
                return RenderSurfaceSix()
        }
    }

    return (
        <View style={styles.DiceWrapper} >
            <Text style={styles.DiceText} >Dice</Text>
            <TouchableOpacity style={[styles.diceContainer, { backgroundColor: color }]} activeOpacity={0.6} onPress={() => {onDiceRoll()}} >
                {RenderDiceSurface(diceNumber)}
            </TouchableOpacity>
            {isRolling &&
                <View style={styles.diceContainer} >
                    <ActivityIndicator color={'#23C4ED'} />
                </View>
            }
        </View>
    )
}

export default Dice



const styles = StyleSheet.create({
    DiceWrapper: {
        // position: 'absolute',
    },
    DiceText: {
        position: 'absolute',
        alignSelf: 'center',
    },
    diceContainer: {
        position: 'absolute',
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#f00'
    },
    diceDot: {
        backgroundColor: colors.white,
        alignSelf: 'center',
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 2
    },
    ForFourDot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forFiveDot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forSixDot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

})