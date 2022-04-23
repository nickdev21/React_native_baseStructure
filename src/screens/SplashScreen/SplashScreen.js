import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
import { styles } from './SplashStyle';


const SplashScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.SplashWrapper} >
            <Text>SplashScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.NEW_GAME)} >
                <Text>Here</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SplashScreen