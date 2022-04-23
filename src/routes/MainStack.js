import { View, Text } from 'react-native'
import React from 'react'
import NavigationStrings from '../constants/NavigationStrings'
import { BoardScreen } from '../screens'


const MainStack = (Stack) => {
    return (
        <Stack.Screen name={NavigationStrings.BOARD_SCREEN} component={BoardScreen} />
    )
}

export default MainStack