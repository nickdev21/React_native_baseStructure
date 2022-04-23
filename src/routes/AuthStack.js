import { View, Text } from 'react-native'
import React from 'react'
import NavigationStrings from '../constants/NavigationStrings';
import { NewGame, SplashScreen } from '../screens';



const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={NavigationStrings.SPALSH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={NavigationStrings.NEW_GAME} component={NewGame} />
    </>
  )
}

export default AuthStack