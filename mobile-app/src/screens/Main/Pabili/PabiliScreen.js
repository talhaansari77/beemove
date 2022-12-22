import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Spacer } from "../../../components/Spacer";
import commonStyles from "../../../../Utils/CommonStyles";
import PercentageSpacer from "../../../components/PercentageSpacer";
import TopRideContainer from "../../../components/TopRideContainer";
import RideBottomContainer from "../Ride/Molecules/RideBottomContainer";
import MainTopHeader from "../../../components/MainTopHeader";
import BookPadalaTop from "../Padala/BookPadala/BookPadalaTop";
import CustomTextInput from "../../../components/CustomTextInput";
import PabiliInnerContainer from "./PabiliInnerContainer";

const PabiliScreen = () => {
  const inputData = [
    {
      id: 1,
      withLabel: "Merchant Name",
      placeholder: "Name of Establishment",
    },
    {
      id: 2,
      withLabel: "Landmark",
      placeholder: "Nearby known Establishment Name",
    },
  ];
  return (
    <View style={commonStyles.container2}>
      <Spacer height={Platform.OS == "ios" ? 40 : 5} />
      <ScrollView style={{ flex: 1 }}>
        <Spacer height={10} />
        <MainTopHeader
          txt={"Pabili"}
          img={require("../../../../assets/images/card.png")}
        />
        <Spacer height={20} />
        <BookPadalaTop />
        <PercentageSpacer height={"40%"} />
        {inputData.map((item) => {
          return (
            <>
              <CustomTextInput
                withLabel={item.withLabel}
                placeholder={item.placeholder}
                fontSize={12}
                paddingLeft={20}
                placeholderTextColor={"#9C9C9C"}
                fontFamily={"Roboto-Light"}
              />
              <Spacer height={20} />
            </>
          );
        })}
<PabiliInnerContainer />
      </ScrollView>
    </View>
  );
};

export default PabiliScreen;

const styles = StyleSheet.create({});
