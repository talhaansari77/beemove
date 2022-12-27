import { View, Text, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../Utils/Colors";
import CustomDrawer from "./CustomDrawer";
import DrawerContainer from "../../components/DrawerContainer";
import BookingStack from "../MainStack/BookingStack/BookingStack";


const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#3f3f3f",
        drawerActiveBackgroundColor: colors.secondary,
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 15,
          marginVertical: 5,
        },
      }}
      initialRouteName={"Home"}
    >
      <Drawer.Screen
        options={{
          // drawerItemStyle:{display:"none"},
          drawerIcon: ({ color }) => (
            // <DrawerContainer img={require("../../../assets/images/menu.png")}
            // backgroundColor={colors.darkGray}
            // width={30}
            // height={30}
            // />
            <View >
                <Image
              source={require("../../../assets/images/home.png")}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />

            </View>
          
          ),
        }}
        name="Make a Booking"
        component={BookingStack}
      />
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              source={icons.payment}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="Payment"
        component={PaymentsScreen}
      /> */}
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={icons.promotion}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="Promotions"
        component={PromotionStack}
      /> */}
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={icons.ride}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="My Rides"
        component={MyRidesScreen}
      /> */}
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={icons.question}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="Supports"
        component={SupportStack}
      /> */}
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={icons.about}
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: "#3f3f3f",
              }}
            />
          ),
        }}
        name="About"
        component={AboutScreen}
      /> */}
    </Drawer.Navigator>
  );
};

export default MainDrawer;
