import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../../../../components/CustomButton";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../../Utils/Colors";
import CustomText from "../../../../components/CustomText";
import SepratorLine from "../../../../components/SepratorLine";
import { Spacer } from "../../../../components/Spacer";

const LoginRegBottom = ({onRegister}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.btnContainer}>
        <CustomButton
          width={"46%"}
          height={verticalScale(45)}
          title="LOGIN"
          color={"#1B1B1E"}
          fontSize={12}
        />

        <CustomButton
          width={"46%"}
          height={verticalScale(45)}
          title="REGISTER"
          fontSize={12}
          onPress={onRegister}
          backgroundColor={colors.white}
          borderColor={colors.primary}
          color={colors.primary}
          borderWidth={1}
        />
      </View>
      <Spacer height={40} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: verticalScale(10),
        }}
      >
        <SepratorLine height={0.7} width={"44%"} />
        <CustomText
          label="or"
          marginLeft={7}
          marginRight={7}
          fontSize={13}
          fontFamily={"Roboto-Light"}
        />
        <SepratorLine height={0.7} />
      </View>
      <Spacer height={20} />
      <View
        style={{ ...styles.btnContainer, width: "45%", alignSelf: "center" }}
      >
        <View style={styles.authBtn}>
          <Image
            style={styles.img}
            source={require("../../../../../assets/images/google.png")}
          />
        </View>

        <View style={styles.authBtn}>
          <Image
            style={styles.img}
            source={require("../../../../../assets/images/facebook.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginRegBottom;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authBtn: {
    width: moderateScale(60),
    height: verticalScale(50),
    borderRadius: scale(20),
    borderColor: colors.lightGray,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
});
