import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import CustomText from "../../../components/CustomText";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../../../components/CustomHeader";
import { images } from "../../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import { CheckBox } from "react-native-elements";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import commonStyles from "../../../../Utils/CommonStyles";
import CustomButton from "../../../components/CustomButton";

const PaymentScreen = ({navigation}) => {
  const [isOn, setisOn] = useState(true);
  const [check, setCheck] = useState(false);
  return (
    <SafeAreaView
      style={{ display: "flex", flex: 1, backgroundColor: colors.white }}
    >
      <View
        style={{
          backgroundColor: colors.white,
          height: 80,
          justifyContent: "center",
          width: "auto",
          paddingHorizontal: 15,
        }}
      >
        <CustomHeader
          LeftSide={() => (
            <TouchableOpacity activeOpacity={0.6}
            onPress={()=>navigation.goBack()}
            >  
               <MaterialIcons
            name="arrow-back"
            size={moderateScale(25)}
            color="black"
          />

            </TouchableOpacity>
          )}
          Center={() => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "-10%",
              }}
            >
              <MaterialIcons name="payment" color={colors.primary} size={20} />
              <Spacer width={10} />
              <CustomText
                label="Payment"
                alignSelf={"center"}
                fontSize={16}
                fontFamily="Roboto-Medium"
                // fontWeight={"bold"}
                color={colors.lightText}
              />
            </View>
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
            width: "100%",
            height: Dimensions.get("window").height / 1.2,
          }}
          // resizeMode={"contain"}
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

            <View style={{ display: "flex", flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setCheck(!check)}
                style={styles.checkContainer}
              >
                {check ? (
                  <Ionicons
                    name="checkmark-sharp"
                    size={moderateScale(20)}
                    color={colors.primary}
                  />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <Spacer width={10} />
              <View style={{ alignSelf: "center" }}>
                <CustomText label="Use Wallet Cash (Your Balance is $274.00)" />
              </View>
            </View>
            <Spacer height={10} />

            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: colors.lightText,
              }}
            />
            <Spacer height={10} />
            <View
              style={{ ...commonStyles.rowSpacerBetween, paddingRight: 20 }}
            >
              <CustomText
                label="Bill Details"
                fontSize={14}
                color={colors.lightText}
              />
              <CustomText
                label="$23.00"
                fontSize={14}
                color={colors.lightText}
              />
            </View>
            <Spacer height={30} />
            <View style={commonStyles.rowContainer}>
              <CustomButton
                title={"Pay with Cash"}
                width={"40%"}
                height={40}
                fontSize={12}
                backgroundColor={colors.primary}
              />
              <Spacer width={10} />
              <CustomButton
                title={"Pay with Card"}
                width={"40%"}
                height={40}
                onPress={()=>navigation.navigate("Receipt")}
                fontSize={12}
                backgroundColor={colors.white}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  checkContainer: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.grayBorder,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PaymentScreen;
