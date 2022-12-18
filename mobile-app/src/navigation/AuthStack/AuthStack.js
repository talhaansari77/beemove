import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginRegister from '../../screens/Auth/LoginRegister/LoginRegister'
import Register from '../../screens/Auth/Register/Register'
import PhoneNumber from '../../screens/Auth/Register/PhoneNumber/PhoneNumber'

const Stack=createStackNavigator()

const AuthStack = () => {
  return (
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
          <Stack.Screen name="LoginRegister" component={LoginRegister}/>
          <Stack.Screen name="PhoneNumber" component={PhoneNumber}/>
          <Stack.Screen name="Register" component={Register}/>


      </Stack.Navigator>
  
  )
}

export default AuthStack