import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import LoginRegHeader from "./Molecules/LoginRegHeader";
import LoginRegBottom from "./Molecules/LoginRegBottom";
import { Spacer } from "../../../components/Spacer";
import PercentageSpacer from "../../../components/PercentageSpacer";
import commonStyles from "../../../../Utils/CommonStyles";
import { FirebaseContext } from "common/src";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";

const LoginRegister = ({ navigation }) => {
  const { api, config } = useContext(FirebaseContext);
  const {
    clearLoginError,
    requestPhoneOtpDevice,
    mobileSignIn,
    countries,
    facebookSignIn,
    appleSignIn,
    requestEmailOtp,
    verifyEmailOtp,
  } = api;

  const FbLogin = async () => {
    try {
      LoginManager.logInWithPermissions(["public_profile"]).then(
        function (result) {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            AccessToken.getCurrentAccessToken().then((data) => {
              pageActive.current = true;
              dispatch(facebookSignIn(data.accessToken));
            });
          }
        },
        function (error) {
          Alert.alert(t("alert"), t("facebook_login_auth_error"));
        }
      );
    } catch (error) {
      console.log(error);
      Alert.alert(t("alert"), t("facebook_login_auth_error"));
    }
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <Spacer height={10} />
      <LoginRegHeader />
      <View style={commonStyles.PH30}>
        <PercentageSpacer height={"35%"} />
        <LoginRegBottom
        onGoogle={()=>{
          
        }}
        onFaceBook={()=>{
          FbLogin()}}
        onLogin={()=>{
          navigation.navigate("Login")}}
        onRegister={()=>{
          navigation.navigate("Register")}}/>
        </View>
    </SafeAreaView>
  )
}
export default LoginRegister

const styles = StyleSheet.create({});
