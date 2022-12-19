import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import TopHeader from '../../components/TopHeader'
import commonStyles from '../../../Utils/CommonStyles'
import { Spacer } from '../../components/Spacer'

const Home = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
    <View style={commonStyles.PH30}>

      <TopHeader 
      img={require("../../../assets/images/appLogo.png")}
      label1={"Hi Lexton!"}
      label2={"How can we help you today?"}
      
      />
      <Spacer height={10} />
      </View>
      </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({})