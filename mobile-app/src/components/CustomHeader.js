import { View } from "react-native";
import React from "react";
// import styled from "react-native-styled-components";
import commonStyles from "../../Utils/CommonStyles";

const CustomHeader = ({ LeftSide, Center, RightSide }) => {
  return (
    <View
      style={{
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        // ...commonStyles.rowContainer,
        justifyContent: "space-between",
      }}
    >
      {LeftSide ? <LeftSide /> : <View/>}
      {Center ? <Center /> : <View/>}
      {RightSide ? <RightSide /> : <View/>}
    </View>
  );
};

export default CustomHeader;

// const Row = styled(View, {
//   ...commonStyles.rowContainer,
//   justifyContent: "space-between",
// });
