import React, { useState } from 'react'
import { View, Text, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Routes = () => {
    const [user, setuser] = useState(true)
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                {
                    user === true ? MainStack(Stack) : AuthStack(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes