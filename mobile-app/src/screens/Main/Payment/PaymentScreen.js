import { View, Text, Image, ImageBackground } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import CustomText from "../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../../../components/CustomHeader";
import { images } from "../../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import { CheckBox } from "react-native-elements";

const PaymentScreen = () => {
  const [isOn, setisOn] = useState(true);
  return (
    <View style={{ display: "flex", flex: 1 }}>
      {/* <View style={{}}> */}
      {/* <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: colors.primary,
            height: 80,
            alignItems: "center",
            width: "auto",
            paddingHorizontal: 15,
          }}
        >
          <AntDesign name="arrowleft" size={26} color={colors.black} />
          <View>
            <CustomText label="Payment" alignSelf={"center"} fontSize={18} />
          </View>
          <CustomText label="" />
        </View> */}

      <View
        style={{
          backgroundColor: colors.primary,
          height: 80,
          justifyContent: "center",
          width: "auto",
          paddingHorizontal: 15,
        }}
      >
        <CustomHeader
          LeftSide={() => (
            <AntDesign name="arrowleft" size={24} color="black" />
          )}
          Center={() => (
            <CustomText label="Payment" alignSelf={"center"} fontSize={15} />
          )}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageBackground
          source={images.bill}
          style={{
            width: 350,
            height: 540,
          }}
          resizeMode={"contain"}
        >
          <Spacer height={20} />
          <View style={{ width: "auto", padding: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <CustomText label="Bill Details" fontSize={14} />
                <Spacer height={14} />
                <CustomText label="Your Fare" fontSize={11} />
                <Spacer height={14} />
                <CustomText label="Promo Discount" fontSize={11} />
                <Spacer height={14} />
              </View>
              <View>
                <CustomText
                  label="Apply Promo"
                  fontSize={10}
                  color={colors.primary}
                />
                <Spacer height={17} />
                <CustomText label="$ 23.00" fontSize={11} />
                <Spacer height={17} />
                <CustomText label="-$0.00" fontSize={11} />
              </View>
            </View>
            <CheckBox
              center
              // title="Click Here"
              // iconType="material"
              // checkedIcon="check"
              // checkedColor={}
              // uncheckedIcon="add"
              checkedColor={colors.primary}
              checked={isOn}
              onPress={() => {
                setisOn(!isOn);
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default PaymentScreen;
