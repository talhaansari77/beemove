import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../Utils/Colors";

const DrawerContainer = ({
  navigation,
  width,
  height,
  backgroundColor,
  margin,
  img,
  position,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{
        width: width || 50,
        height: height || 50,
        borderRadius: 99,
        // borderColor:99,
        backgroundColor: backgroundColor || colors.white,
        position: position ||"absolute",
        top: 0,
        margin: margin || 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image style={{ width: 25, height: 25 }} source={img} />
    </TouchableOpacity>
  );
};

export default DrawerContainer;

const styles = StyleSheet.create({
  mainContainer: {
    width: 50,
    height: 50,
    borderRadius: 99,
    // borderColor:99,
    backgroundColor: colors.white,
    // position: "absolute",
    // top: 0,
    // margin: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
