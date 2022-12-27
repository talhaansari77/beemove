import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import LoginRegHeader from "./Molecules/LoginRegHeader";
import LoginRegBottom from "./Molecules/LoginRegBottom";
import { Spacer } from "../../../components/Spacer";
import PercentageSpacer from "../../../components/PercentageSpacer";
import commonStyles from "../../../../Utils/CommonStyles";

const LoginRegister = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Spacer height={10} />
      <LoginRegHeader />
      <View style={commonStyles.PH30}>
        <PercentageSpacer height={"35%"} />
        <LoginRegBottom
        onLogin={()=>{
          navigation.navigate("PhoneNumber")}}
        onRegister={()=>{
          navigation.navigate("PhoneNumber")}}/>
        </View>
    </SafeAreaView>
  )
}
export default LoginRegister

const styles = StyleSheet.create({});
