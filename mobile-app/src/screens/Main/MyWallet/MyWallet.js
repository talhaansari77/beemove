import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { AntDesign } from "@expo/vector-icons";
import commonStyles from "../../../../Utils/CommonStyles";
import { images } from "../../../../assets/images";
import { colors } from "../../../../Utils/Colors";
import { Spacer } from "../../../components/Spacer";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const MyWallet = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          paddingVertical: 10,
          justifyContent: "center",
          width: "100%",
          paddingHorizontal: 15,
        }}
      >
        <CustomHeader
          LeftSide={() => (
            <View style={commonStyles.iconContainer}>
              <Image
                resizeMode="contain"
                source={images.sort}
                style={commonStyles.img}
              />
            </View>
          )}
          Center={() => (
            <CustomText label="MyWallet" alignSelf={"center"} fontSize={15} />
          )}
        />
      </View>
      <View
        style={{
          height: verticalScale(70),
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: colors.white,
          //   elevation: 5,
          backgroundColor: colors.gray1,
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <CustomText label="Wallet Balance" fontSize={12} />
        <CustomText
          label="$504.97"
          fontSize={18}
          color={colors.primary}
          fontWeight={"bold"}
        />
      </View>
      <Spacer height={20} />
      <CustomText label="Transaction History" fontSize={14} marginLeft={30} />
      <Spacer height={20} />
      <View style={{height:screenHeight/1.6}}>
        <ScrollView showsVerticalScrollIndicator={false}>

        
        {[1, 2, 3, 4].map(() => (
          <>
            <HistoryView />
            <Spacer height={20} />
          </>
        ))}
        </ScrollView>
      </View>
      <Spacer height={10} />
      <TouchableOpacity
      activeOpacity={0.7}
        style={{
          ...commonStyles.rowContainer,
          backgroundColor: colors.white,
          elevation: 5,
          padding: 10,
          width: "50%",
          alignSelf: "center",
          borderRadius: 100,
        }}
      >
        <View style={{ width: scale(18), height: verticalScale(18) }}>
          <Image
            resizeMode="contain"
            source={images.add}
            style={{ ...commonStyles.img, tintColor: colors.primary }}
          />
        </View>
        <Spacer width={10} />

        <View>
          <CustomText
            label="Add Money"
            fontSize={14}
            color={colors.primary}
            fontWeight={"bold"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const HistoryView = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 30,
    }}
  >
    <View
      style={{
        height: screenHeight / 17,
        width: screenHeight / 17,
        borderRadius: screenHeight / 17,
        backgroundColor: colors.white,
        elevation: 5,
      }}
    ></View>
    <Spacer width={20} />
    <View style={{flex:8}}>
      <CustomText label="Debited $23.00" fontSize={14} />
      <CustomText label="Deposits or withdrawals from a personal account (via automated teller machine or ATM" fontSize={10} />
    </View>
  </View>
);
export default MyWallet;