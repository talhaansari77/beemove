import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../../components/Spacer";
import CustomText from "../../../../../components/CustomText";
import { colors } from "../../../../../../Utils/Colors";
import PercentageSpacer from "../../../../../components/PercentageSpacer";
import CustomTextInput from "../../../../../components/CustomTextInput";
// import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from "react-native-phone-number-input";
import CustomButton from "../../../../../components/CustomButton";

const PhoneMainContainer = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  return (
    <>
      <View>
        <Image
          resizeMode="contain"
          style={{
            width: 250,
            height: verticalScale(100),
            alignSelf: "center",
          }}
          source={require("../../../../../../assets/images/appLogo.png")}
        />
        <PercentageSpacer height={"8%"} />
        <CustomText
          label="Welcome!"
          color={colors.lightBlack}
          fontSize={20}
          //   fontWeight="Roboto-Medium"
        />
        <CustomText
          label="Kindly enter your mobile number"
          color={colors.lightText}
          fontSize={12}
          fontFamily="Roboto-Light"
          marginTop={10}
        />
        <PercentageSpacer height={"13%"} />
        <PhoneInput
          defaultValue={countryCode}
          defaultCode="PK"
          onChangeFormattedText={(text) => {
            setCountryCode(text);
          }}
          containerStyle={{
            backgroundColor: colors.lightGray,
            borderColor: colors.darkGray,
            borderWidth: 1,
            borderRadius: scale(8),
          }}
          textContainerStyle={{
            backgroundColor: colors.lightGray,
            borderRadius: scale(8),
            // borderColor: colors.lightGray,
            // borderRightWidth:1,
            // borderTopWidth:0.3,
            // borderBottomWidth:0.2

          }}
        />
        <PercentageSpacer height={"30%"} />

        <CustomButton
          width={"100%"}
          height={verticalScale(45)}
          title="Next"
          fontFamily={"Roboto-Medium"}
          color={"#1B1B1E"}
          fontSize={12}
          onPress={()=>navigation.navigate("Register")}
        />
      </View>
    </>
  );
};

export default PhoneMainContainer;

const styles = StyleSheet.create({
  mainContainer: {},
});
