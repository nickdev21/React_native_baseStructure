import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { HOME } from '../constants/constant';
import { colors } from '../constants/colors';

const UserArea = ({ userMetaData, customStyle, turn }) => {

    const renderPiece = (piece) => {
        if (piece.postion == HOME) {
            return (
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { onPieceSelection(piece) }}>
                    <View style={[styles.pieceStyle, { backgroundColor: userMetaData.color }]} />
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity style={{ flex: 1 }}>
                <View style={[styles.pieceStyle, { backgroundColor: colors.white, opacity: customOpacity }]} />
            </TouchableOpacity>
        );
    }

    // customStyle.opacity = turn == userMetaData.player ? 1 : 0.6;


    return (
        <View style={[{ flex: 3, backgroundColor: userMetaData.color, }, customStyle]} >
            {console.log(userMetaData, "here")}
            <View style={styles.innerContainer} >
                <View style={styles.piecesWrapper} >
                    {renderPiece(userMetaData.pieces.one)}
                    {renderPiece(userMetaData.pieces.two)}
                </View>
                <View style={styles.piecesWrapper} >
                    {renderPiece(userMetaData.pieces.three)}
                    {renderPiece(userMetaData.pieces.four)}
                </View>
            </View>
        </View>
    )
}

export default UserArea


const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 20,
    },
    piecesWrapper: {
        flexDirection: 'row',
        flex: 1,
    },
    pieceStyle: {
        flex: 1,
        margin: 5,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#000"
    }

})