import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Routes from './src/routes/Routes'

const App = () => {
  return (
    <>

      <StatusBar
        animated={true}
        backgroundColor="#23C4ED"
      />
      <Routes />
    </>

  )
}

export default App