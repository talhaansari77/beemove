import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import commonStyles from "../../../../Utils/CommonStyles";
import MainTopHeader from "../../../components/MainTopHeader";
import { Spacer } from "../../../components/Spacer";
import TopRideContainer from "../../../components/TopRideContainer";
import PercentageSpacer from "../../../components/PercentageSpacer";
import CustomTextInput from "../../../components/CustomTextInput";
import { colors } from "../../../../Utils/Colors";
import { ScrollView } from "react-native-gesture-handler";
import RideBottomContainer from "./Molecules/RideBottomContainer";

const RideScreen = ({route}) => {

  const inputData = [
    {
      id: 1,
      withLabel: "Pick-Up Address details",
      placeholder: "Unit number & Street number",
    },
    {
      id: 2,
      withLabel: "Drop-Off Address details",
      placeholder: "Unit number & Street number",
    },
    { id: 3, withLabel: "Note to Driver", placeholder: "Write note here..." },
  ];
  return (
    <View style={commonStyles.container2}>
      <Spacer height={Platform.OS == "ios" ? 40 : 5} />

      <ScrollView style={{ flex: 1 }}>
        <Spacer height={10} />
        <MainTopHeader
          txt=  {route?.params?.car?"Car":"Ride"}
          img={route?.params?.car? require("../../../../assets/images/car.png"):require("../../../../assets/images/bike.png")}
        />
        <Spacer height={20} />

        <TopRideContainer/>
        <PercentageSpacer height={"40%"} />
        {inputData.map((item) => {
          return (
            <>
              <CustomTextInput
                withLabel={item.withLabel}
                placeholder={item.placeholder}
                fontSize={12}
                paddingLeft={20}
                // paddingTop={10}
                placeholderTextColor={"#9C9C9C"}
                fontFamily={"Roboto-Light"}
              />
              <Spacer height={20} />
            </>
          );
        })}



        <RideBottomContainer />
      </ScrollView>
    </View>
  );
};

export default RideScreen;

const styles = StyleSheet.create({});
