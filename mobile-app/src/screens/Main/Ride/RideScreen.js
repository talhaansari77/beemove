import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
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

import MapView, { Marker } from "react-native-maps";
// import LocationModal from "./Molecules/LocationModal";
// import DrawerContainer from "./Molecules/DrawerContainer";
import { AntDesign } from "@expo/vector-icons";
import { scale, verticalScale } from "react-native-size-matters";
// import { colors } from "../../../utils/Colors";
const RideScreen = ({ route }) => {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0,
    longitudeDelta: 0.0031,
  };
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
    <View style={{backgroundColor:colors.white}} >
      <Spacer height={Platform.OS == "ios" ? 40 : 5} />

      <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
        <View style={commonStyles.PH30}>

        
        <Spacer height={10} />
        <MainTopHeader
          txt={route?.params?.car ? "Car" : "Ride"}
          img={
            route?.params?.car
              ? require("../../../../assets/images/car.png")
              : require("../../../../assets/images/bike.png")
          }
        />
        <Spacer height={20} />
        <TopRideContainer />
        <Spacer height={20} />
        </View>
        <MapView region={region} style={styles.map}>
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
            {/* <View style={{}}> */}
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 45,
                backgroundColor: colors.primary,
                borderRadius: 15,
              }}
            >
              <AntDesign
                name="user"
                size={18}
                color={colors.white}
                style={{
                  alignSelf: "center",
                }}
              />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <AntDesign
                name="caretdown"
                size={20}
                color={colors.primary}
                style={{ alignSelf: "center", marginTop: -7 }}
              />
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius:6,
                  backgroundColor: colors.primary,
                  opacity: 0.5, marginTop: -9 
                }}
              />
            </View>
            {/* </View> */}
          </Marker>
        </MapView>
        <View style={commonStyles.PH30}>

        
        <Spacer height={20} />
        {/* <PercentageSpacer height={"40%"} /> */}
       
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
        </View>
        <Spacer height={30} />
      </ScrollView>
    </View>
  );
};

export default RideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: Dimensions.get('window').height/2,
  },
});
