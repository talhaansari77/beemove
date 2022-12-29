import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import commonStyles from "../../../../Utils/CommonStyles";
import { Spacer } from "../../../components/Spacer";
import TopHeader from "../../../components/TopHeader";
import PercentageSpacer from "../../../components/PercentageSpacer";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../../Utils/Colors";
import { NavigationContainer } from "@react-navigation/native";
import RegisterCheck from "./Molecules/RegisterCheck";
import { images } from "../../../../assets/images";

const Register = ({ navigation }) => {
  const [check, setCheck] = useState("Customer");
  const CheckData = ["Customer", "Driver"];

  const CustomerInput = [
    {
      id: 1,
      placeholder: "First Name",
      rightLabel: require("../../../../assets/images/user.png"),
    },
    {
      id: 2,
      placeholder: "Last Name",
      rightLabel: require("../../../../assets/images/user.png"),
    },
    {
      id: 3,
      placeholder: "Email",
      rightLabel: require("../../../../assets/images/email.png"),
    },

    {
      id: 4,
      placeholder: "Password",
      rightLabel: require("../../../../assets/images/lock.png"),
    },
    {
      id: 5,
      placeholder: "Confirm Password",
      rightLabel: require("../../../../assets/images/lock.png"),
    },
  ];

  const DriverInput = [
    {
      id: 1,
      placeholder: "First Name",
      rightLabel: require("../../../../assets/images/user.png"),
    },
    {
      id: 2,
      placeholder: "Last Name",
      rightLabel: require("../../../../assets/images/user.png"),
    },
    {
      id: 3,
      placeholder: "Email",
      rightLabel: require("../../../../assets/images/email.png"),
    },

    {
      id: 4,
      placeholder: "Phone Number",
      rightLabel: require("../../../../assets/images/user.png"),
    },
    {
      id: 5,
      placeholder: "SUV",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 6,
      placeholder: "Vehicle Name / Brand Name",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 7,
      placeholder: "Vehicle Mobile No",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 8,
      placeholder: "Vehicle Rehistration / Plate Number",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 9,
      placeholder: "Other Vehicle or Driver Info",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 10,
      placeholder: "Bank Name",
      rightLabel: images.bank,
    },
    {
      id: 11,
      placeholder: "Bank Code",
      rightLabel: images.bank,
    },
    {
      id: 12,
      placeholder: "Bank Account",
      rightLabel: images.bank,
    },
  ];
  return (
    <View style={{ backgroundColor: colors.white }}>
      <Spacer height={Platform.OS == "ios" ? 40 : 5} />

      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <Spacer height={20} />
        <View style={commonStyles.PH40}>
          <TopHeader
            backIcon
            label1={"Register"}
            navigation={navigation}
            img={require("../../../../assets/images/appLogo.png")}
            label2="Make vour own account with Beemove"
            // spacerHeight={"5%"}
          />
        </View>
        {/* <PercentageSpacer height={"7%"} /> */}
        {/* <Spacer height={20}/> */}
        <Spacer height={20} />
        <View style={commonStyles.PH30}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../../assets/images/user.png")}
              style={{ width: 20, height: 20 }}
            />

            {CheckData.map((item) => {
              return (
                <>
                  <RegisterCheck
                    item={item}
                    check={check}
                    setCheck={setCheck}
                  />
                  {/* <Spacer width={10}/> */}
                </>
              );
            })}
          </View>
        </View>
        <Spacer height={20} />

        {check == "Customer"
          ? CustomerInput.map((item) => {
              return (
                <View style={commonStyles.PH30}>
                  <CustomTextInput
                    placeholder={item.placeholder}
                    fontSize={12}
                    paddingLeft={20}
                    rightLabel={item.rightLabel}
                    // paddingTop={10}
                    placeholderTextColor={"#9C9C9C"}
                    fontFamily={"Roboto-Light"}
                  />
                  <Spacer height={30} />
                </View>
              );
            })
          : DriverInput.map((item) => {
              return (
                <View style={commonStyles.PH30}>
                  <CustomTextInput
                    placeholder={item.placeholder}
                    fontSize={12}
                    paddingLeft={20}
                    rightLabel={item.rightLabel}
                    // paddingTop={10}
                    placeholderTextColor={"#9C9C9C"}
                    fontFamily={"Roboto-Light"}
                  />
                  <Spacer height={30} />
                </View>
              );
            })}
        <View style={commonStyles.PH30}>
          <Spacer height={40} />
          <CustomButton
            title="Register"
            fontFamily={"Roboto-Regular"}
            onPress={() => navigation.navigate("OtpScreen")}
          />
          <Spacer height={20} />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomText
              label="Already have an account?"
              color={colors.lightBlack}
              fontFamily={"Roboto-Regular"}
              fontSize={11}
            />
            <CustomText
              label="Login"
              color={colors.primary}
              marginLeft={2}
              fontFamily={"Roboto-Bold"}
              fontSize={11}
            />
          </View>
        </View>
        <Spacer height={100} />
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
