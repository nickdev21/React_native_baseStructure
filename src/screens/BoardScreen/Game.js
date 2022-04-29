import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BoardScreen from './BoardScreen'

const Game = () => {
    return (
        <BoardScreen
            redName={"RED PLAYER"}
            yellowName={"YELLOW PLAYER"}
            greenName={"GREEN PLAYER"}
            blueName={"BLUE PLAYER"}
        />
    )
}

export default Game