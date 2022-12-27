import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../../screens/Main/Home/Home'
import RideScreen from '../../../screens/Main/Ride/RideScreen'
import CarScreen from '../../../screens/Main/Car/CarScreen'
import PadalaScreen from '../../../screens/Main/Padala/PadalaScreen'
import BookPadala from '../../../screens/Main/Padala/BookPadala/BookPadala'
import PabiliScreen from '../../../screens/Main/Pabili/PabiliScreen'
// import Home from '../../screens/Auth/Main/Home/Home'

const Stack=createStackNavigator()

const BookingStack = () => {
  return (
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      // initialRouteName={'PabiliScreen'}
      >
          <Stack.Screen name="HomeScreen" component={Home}/>
          <Stack.Screen name="RideScreen" component={RideScreen}/>
          <Stack.Screen name="CarScreen" component={CarScreen}/>
          <Stack.Screen name="PadalaScreen" component={PadalaScreen}/>
          <Stack.Screen name="BookPadala" component={BookPadala}/>
          <Stack.Screen name="PabiliScreen" component={PabiliScreen}/>
      </Stack.Navigator>
  
  )
}

export default BookingStack