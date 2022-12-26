import { View, Text } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import { colors } from "../../../../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import CustomText from "../../../components/CustomText";

const Receipt = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.primary,
          height: 80,
          justifyContent: "center",
          width: "auto",
          paddingHorizontal: 15,
        }}
      >
        <CustomHeader
          LeftSide={() => (
            <AntDesign name="arrowleft" size={24} color="black" />
          )}
          Center={() => (
            <CustomText label="Receipt" alignSelf={"center"} fontSize={17} />
          )}
        />
      </View>

      <View>
        <View></View>
        <View>
          <CustomText label="P-40, Subhash Nagar, Basunagar,Madhyamgram, Kolkata, West Bengal 707481, India" />
          <CustomText
            label="Airport AC Bus Stand, International Airport, Dum Dum, Kolkata, West Bengal 700052. India"
          />
        </View>
      </View>
    </View>
  );
};

export default Receipt;
