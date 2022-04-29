import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { B10, B11, B12, B13, B6, B7, B8, B9, G1, G14, G15, G16, G17, G18, G2, G3, G4, G5, G9, R1, R14, R15, R16, R17, R18, R2, R3, R4, R5, R9, Y10, Y11, Y12, Y13, Y6, Y7, Y8, Y9 } from '../../constants/constant'
import Dice from '../Dice/Dice'
import CellBox from '../CellBox/CellBox'
import { getCellBackgroundColor } from '../../constants/utils'
import FourStar from '../CellBox/FourStart'

const HorizontalCellContainer = ({ playerInfo, onDiceRoll, isRolling, diceNumber ,turn }) => {

    const RenderRow = (positionArray) => (
        <View style={{ flex: 6, flexDirection: 'row' }}>
            {positionArray.map((cellPosition) => (
                <View style={styles.cellContainer} key={cellPosition} >
                    {cellPosition === B9 || cellPosition === Y9 ?
                        <FourStar backgroundColor={getCellBackgroundColor(cellPosition)} />
                        :
                        <CellBox backgroundColor={getCellBackgroundColor(cellPosition)} />
                    }
                </View>
            ))}
        </View>
    )

    const EmptySpace = () => (
        <View style={{ flex: 4 }} />
    )

    const RenderRowsContainer = (arrayOne, arrayTwo) => (
        <View style={styles.rowContainer} >
            {RenderRow(arrayOne)}
            <EmptySpace />
            {RenderRow(arrayTwo)}
        </View>
    )

    return (
        <View style={styles.HorizontalWrapper} >
            <Dice
                isRolling={isRolling}
                turn={turn}
                diceNumber={diceNumber}
                onDiceRoll={onDiceRoll}
            />
            {console.log(turn, 'DETAIL')}
            {RenderRowsContainer([B13, R1, R2, R3, R4, R5], [Y6, Y7, Y8, Y9, Y10, Y11])}
            {RenderRowsContainer([B12, R14, R15, R16, R17, R18], [G18, G17, G16, G15, G14, Y12])}
            {RenderRowsContainer([B11, B10, B9, B8, B7, B6], [G5, G4, G3, G2, G1, Y13])}
        </View>
    )
}

export default HorizontalCellContainer


const styles = StyleSheet.create({
    HorizontalWrapper: {
        flex: 2,
        backgroundColor: colors.white,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    cellContainer: {
        flex: 1,
        borderWidth: 0.8,
        borderColor: '#000',
    },
})