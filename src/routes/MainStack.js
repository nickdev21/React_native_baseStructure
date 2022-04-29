import { View, Text } from 'react-native'
import React from 'react'
import NavigationStrings from '../constants/NavigationStrings'
import { BoardScreen, GAME } from '../screens'


const MainStack = (Stack) => {
    return (
        <Stack.Screen name={NavigationStrings.GAME_SCREEN} component={GAME} />
    )
}

export default MainStack