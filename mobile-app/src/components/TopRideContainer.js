import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import CustomTextInput from "./CustomTextInput";
import { Spacer } from "./Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../Utils/Colors";
import AddlButton from "./AddlButton";

const TopRideContainer = ({onAddShop}) => {
  const dot = ["1", "2", "3", "4", "5"];
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ alignItems: "center", marginRight: scale(20) }}>
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
          <Spacer height={5} />
          {/* <CustomText label="...." /> */}
          {dot.map((item) => {
            return (
              <CustomText
                label="."
                fontSize={20}
                marginTop={-15}
                color={"#D4D4D4"}
              />
            );
          })}
          <Image
            source={require("../../assets/images/location.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>

        <View style={{ alignItems: "center", marginRight: scale(20) }}>
          <CustomTextInput
            height={verticalScale(40)}
            width={"95%"}
            placeholder="Pick-up location"
            borderColor={colors.grayBorder}
            borderWidth={1}
            backgroundColor={colors.white}

            borderRadius={10}
            paddingLeft={20} 
            fontSize={11}
          />

          <Spacer height={20} />

          <CustomTextInput
            height={verticalScale(40)}
            width={"95%"}
            placeholder="Drop-off location"
            borderColor={colors.grayBorder}
            borderWidth={1}
            backgroundColor={colors.white}
            borderRadius={10}
            paddingLeft={20}
            fontSize={11}

          />
        </View>
      </View>

      <Spacer height={20} />
 

      <View style={{ alignSelf: "center" }}>
          <AddlButton label="Add Stop"
          width={"42%"}
          height={verticalScale(37)}
          onPress={onAddShop}
          icon={require("../../assets/images/add.png")}
          textColor={colors.primary}
          />
      </View>
    </View>
  );
};

export default TopRideContainer;

const styles = StyleSheet.create({});
