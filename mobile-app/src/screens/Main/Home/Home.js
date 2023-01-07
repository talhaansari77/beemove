import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import BookRideContainer from "./Molecules/BookRideContainer";
import commonStyles from "../../../../Utils/CommonStyles";
import TopHeader from "../../../components/TopHeader";
import { Spacer } from "../../../components/Spacer";
import PercentageSpacer from "../../../components/PercentageSpacer";
import DrawerContainer from "../../../components/DrawerContainer";
import { colors } from "../../../../Utils/Colors";
import { images } from "../../../../assets/images";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {

  const auth = useSelector((state) => state.auth);

  const BookingData = [
    {
      id: 1,
      img: require("../../../../assets/images/bike.png"),
      txt1: "Ride",
      txt2: "Maximum one passenger",
      onPress: () => {
        navigation.navigate("Map",{name:'Ride'});
      },
    },
    {
      id: 2,
      img: require("../../../../assets/images/car.png"),
      txt1: "Car",
      txt2: "Maximum one passenger",
      onPress: () => {
        navigation.navigate("Map",{name:'Car'});
      },
    },
    {
      id: 3,
      img: require("../../../../assets/images/time.png"),
      txt1: "Padala",
      txt2: "Real time delivery within the city only",
      onPress: () => {
        navigation.navigate("Map",{name:'Padala'});
      },
    },
    {
      id: 4,
      img: require("../../../../assets/images/card.png"),
      txt1: "Pabili",
      txt2: "For Foods, Grocery & Goods",
      onPress: () => {
        navigation.navigate("Map",{name:'Pabili'});
      },
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:colors.white }}>
      <View style={commonStyles.container1}>
        <DrawerContainer navigation={navigation} img={images.sort}/>
        <TopHeader
          img={require("../../../../assets/images/delivery.png")}
          label1={"Hi "+auth.info.profile.firstName+ " !"}
          imgHeight={70}
          label2={"How can we help you today?"}
          spacerHeight={"7%"}
          navigation={navigation}
        />
        <PercentageSpacer height={"10%"} />

        {BookingData.map((item) => {
          return (
            <>
              <BookRideContainer item={item} />
              <Spacer height={15} />
            </>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
