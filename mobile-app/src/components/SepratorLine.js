import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'
import { colors } from '../../Utils/Colors'

const SepratorLine = ({height,width}) => {
  return (
    <View style={{width: width|| "46%",height:verticalScale( height || 1),backgroundColor:colors.lightGray}}>
    </View>
  )
}

export default SepratorLine

const styles = StyleSheet.create({})