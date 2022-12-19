import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/Home/Home'
const Stack=createStackNavigator()

const MainStack = () => {
  return (
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
          <Stack.Screen name="LoginRegister" component={Home}/>



      </Stack.Navigator>
  
  )
}

export default MainStack