import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { B1, B14, B15, B16, B17, B18, B2, B3, B4, B5, G10, G11, G12, G13, G6, G7, G8, G9, R10, R11, R12, R13, R6, R7, R8, R9, TOP_VERTICAL, Y1, Y14, Y15, Y16, Y17, Y18, Y2, Y3, Y4, Y5, Y9 } from '../../constants/constant'
import CellBox from '../CellBox/CellBox';
import { getCellBackgroundColor } from '../../constants/utils';
import FourStar from '../CellBox/FourStart';

const VerticalCellContainer = (props) => {

    const column1 = props.position == TOP_VERTICAL ? [R11, R10, R9, R8, R7, R6] : [B5, B4, B3, B2, B1, G13];
    const column2 = props.position == TOP_VERTICAL ? [R12, Y14, Y15, Y16, Y17, Y18] : [B18, B17, B16, B15, B14, G12];
    const column3 = props.position == TOP_VERTICAL ? [R13, Y1, Y2, Y3, Y4, Y5] : [G6, G7, G8, G9, G10, G11];

    const renderColumn = (positionArray) => (
        <View style={styles.columnConatiner}>
            {positionArray.map((cellPosition) => (
                <View style={styles.cellContainer} key={cellPosition} >
                    {cellPosition === G9 || cellPosition === R9 ?
                        <FourStar backgroundColor={getCellBackgroundColor(cellPosition)} />
                        :
                        <CellBox backgroundColor={getCellBackgroundColor(cellPosition)} />
                    }
                </View>
            ))}
        </View>

    )

    return (
        <View style={styles.VerticalWrapper} >
            {renderColumn(column1)}
            {renderColumn(column2)}
            {renderColumn(column3)}
        </View>
    )
}

export default VerticalCellContainer


const styles = StyleSheet.create({
    VerticalWrapper: {
        flex: 2,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    columnConatiner: {
        flex: 1,
    },
    cellContainer: {
        flex: 1,
        borderWidth: 0.8,
        borderColor: '#000',
    },

})