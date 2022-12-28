import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import CustomTextInput from "./CustomTextInput";
import { Spacer } from "./Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../Utils/Colors";
import AddlButton from "./AddlButton";
import CustomButton from "./CustomButton";

const TopRideContainer = ({ onAddShop, completeJob = false }) => {
  const dot = ["1", "2"];
  const fiveDot = ["1", "2", "3", "4", "5"];
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
          {completeJob
            ? dot.map((item) => {
                return (
                  <CustomText
                    label="."
                    fontSize={20}
                    marginTop={-15}
                    color={"#D4D4D4"}
                  />
                );
              })
            : fiveDot.map((item) => {
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

        <View style={{ marginRight: scale(20), justifyContent: "center" }}>
          {completeJob ? (
            <>
              <View style={{ padding: 5 }}>
                <CustomText
                  label={"12 Cambridge Court Ponte Vedra Beach, FL 32082"}
                  fontSize={11}
                  numberOfLines={1}
                />
              </View>
              <Spacer height={20} />
              <View style={{ padding: 5 }}>
                <CustomText
                  label={"15 Pennsylvania Street Rocky Mount, NC 27804"}
                  fontSize={11}
                  numberOfLines={1}
                />
              </View>
            </>
          ) : (
            <>
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
            </>
          )}
        </View>
      </View>

      <Spacer height={20} />

      <View style={{ alignSelf: "center" }}>
        {completeJob ? (
          <CustomButton
            title={"CompleteJob"}
            width={140}
            height={40}
            borderRadius={100}
            fontWeight={"bold"}
            fontSize={12}
            color={colors.primary}
            backgroundColor={colors.white}
          />
        ) : (
          <AddlButton
            label="Add Stop"
            width={"42%"}
            height={verticalScale(37)}
            onPress={onAddShop}
            icon={require("../../assets/images/add.png")}
            textColor={colors.primary}
          />
        )}
      </View>
    </View>
  );
};

export default TopRideContainer;

const styles = StyleSheet.create({});
