import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../../Utils/Colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { AntDesign, Feather, Octicons,MaterialIcons } from "@expo/vector-icons";
import CustomHeader from "../../../components/CustomHeader";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const MyBookings = () => {

  return (
    <View style={{}}>
        <View
            style={{
              paddingVertical: 10,
              justifyContent: "center",
              width: screenWidth,
              paddingHorizontal: 15,
            }}
          >
            <CustomHeader
              LeftSide={() => (
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color={colors.lightText}
                />
              )}
              Center={() => (
                <View style={{flexDirection:'row',alignItems:"center"}}>
                <MaterialIcons name="work" color={colors.primary} size={20}/>
                <Spacer width={10}/>
                <CustomText
                  label="My Booking"
                  alignSelf={"center"}
                  fontSize={16}
                  fontWeight={"bold"}
                  color={colors.lightText}
                /></View>
              )}
              
            />
          </View>
      <Card />
      <Card />
      <Card />
    </View>
  );
};

export default MyBookings;

const Card = () => (
  <View
    style={{
      marginHorizontal: 30,
      backgroundColor: colors.white,
      marginTop: 40,
      elevation: 5,
      padding: 10,
      borderRadius: 10,
    }}
  >
    <View
      style={{
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: colors.white,
        elevation: 5,
        position: "absolute",
        top: -20,
        left: -20,
      }}
    >
      <Image
        source={require("../../../../assets/images/car.png")}
        // style={{ height: 100, width: 100 }}
        resizeMode={"contain"}
      />
    </View>
    {/* Card Body */}
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 40,
        }}
      >
        <View>
          <CustomText label={"27 Apr 2022 13:01"} fontSize={12} />
        </View>
        <View>
          <CustomText label={"$23.00"} fontSize={14} fontWeight={"bold"} />
        </View>
      </View>
      <Spacer height={20} />
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
        <View>
          <CustomText
            label={"15 Pennsylvania Street Rocky Mount, NC 27804"}
            fontSize={10}
            color={colors.darkGray}
          />
        </View>
      </View>
      <Spacer height={10} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ height: 30, width: 30 }}>
          <Image
            source={require("../../../../assets/images/location.png")}
            style={{ height: 20, width: 20 }}
            resizeMode={"contain"}
          />
        </View>
        <View>
          <CustomText
            label={"15 Pennsylvania Street Rocky Mount, NC 27804"}
            fontSize={10}
            color={colors.darkGray}
          />
        </View>
      </View>
    </View>
  </View>
);

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
const styles = StyleSheet.create({});
