import { View, Text, Image } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import { colors } from "../../../../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { verticalScale } from "react-native-size-matters";
import SepratorLine from "../../../components/SepratorLine";
import { images } from "../../../../assets/images";
import { FontAwesome5 } from "@expo/vector-icons";

const Receipt = () => {
  const CenterContent = () => (
    <View style={{flexDirection:"row"}} >
    <FontAwesome5 name="receipt" size={24} color={colors.primary} />
    <Spacer width={10} />
    <CustomText label="Receipt" alignSelf={"center"} fontSize={17} />
    </View>
    );
  return (
    <View>
      <View
        style={{
          //   backgroundColor: colors.primary,
          height: 80,
          justifyContent: "center",
          width: "auto",
          paddingHorizontal: 15,
        }}
      >
        <CustomHeader
          LeftSide={() => (
            <AntDesign name="arrowleft" size={24} color={colors.primary} />
          )}
          Center={() => <CenterContent />}
        />
      </View>
      <Spacer height={30} />
      <View style={{ width: "auto", paddingHorizontal: 25 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <BlurCircle />
          </View>
          <Spacer width={10} />
          <View style={{ flex: 9 }}>
            <CustomText
              label={
                "P-40, Subhash Nagar, Basunagar, Madhyamgram, Kolkata, West Bengal 707481, India"
              }
              fontSize={10}
              color={colors.darkGray}
            />
          </View>
        </View>
        <Spacer height={10} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 30,
              width: 30,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../../assets/images/location.png")}
              style={{ height: 20, width: 20 }}
              resizeMode={"contain"}
            />
          </View>
          <View style={{ flex: 9 }}>
            <CustomText
              label={
                "Airport AC Bus Stand, International Airport, Dum Dum, Kolkata, West Bengal 700052. India"
              }
              fontSize={10}
              color={colors.darkGray}
            />
          </View>
        </View>
      </View>

      <View>
        <Spacer height={40} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "auto",
            paddingHorizontal: 30,
          }}
        >
          <View>
            <CustomText label={"27 Apr 2022 13:01"} fontSize={12} />
          </View>
          <View>
            <CustomText label={"$23.00"} fontSize={14} fontWeight={"bold"} />
          </View>
        </View>
      </View>
      <Spacer height={40} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
        }}
      >
        <SepratorLine height={0.7} width={"50%"} />
        <CustomText
          label="PLEASE RATE YOUR DRIVER"
          fontSize={13}
          fontFamily={"Roboto-Light"}
        />
        <SepratorLine height={0.7} width={"50%"} />
      </View>
      <Spacer height={60} />
      <View>
        <Image
          source={images.driverProfile}
          style={{ height: 80, width: 80, alignSelf: "center" }}
          resizeMode={"contain"}
        />
        <Spacer height={10} />
        <CustomText
          label="Testdriver Comfort"
          alignSelf={"center"}
          fontSize={14}
        />
      </View>

      <View>
        
      </View>
    </View>
  );
};

const BlurCircle = () => (
  <View
    style={{
      borderRadius: 30,
      borderWidth: 2,
      borderColor: colors.lightBlue,
      padding: 2,
    }}
  >
    <View
      style={{
        borderRadius: 30,
        backgroundColor: colors.lightBlue,
        width: 10,
        height: 10,
      }}
    ></View>
  </View>
);

export default Receipt;
