import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "../../../../Utils/Colors";
import commonStyles from "../../../../Utils/CommonStyles";
import { images } from "../../../../assets/images";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import { MaterialCommunityIcons} from "@expo/vector-icons";

const MyEarnings = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          paddingVertical: 10,
          justifyContent: "center",
          width: "100%",
          paddingHorizontal: 15,
        }}
      >
        <CustomHeader
          LeftSide={() => (
            <View style={commonStyles.iconContainer}>
              <Image
                resizeMode="contain"
                source={images.sort}
                style={commonStyles.img}
              />
            </View>
          )}
          Center={() => (
            <View style={{flexDirection:'row',alignItems:"center"}}>
                <MaterialCommunityIcons name="cash-multiple" color={colors.primary} size={20}/>
                <Spacer width={10}/>
            <CustomText
              label="My Earnings"
              alignSelf={"center"}
              fontSize={15}
            />
            </View>
          )}
        />
      </View>

      <View
        style={{
          height: verticalScale(70),
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: colors.white,
          //   elevation: 5,
          backgroundColor: colors.gray1,
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <CustomText label="Today" fontSize={12} />
        <CustomText
          label="$108.97"
          fontSize={20}
          color={colors.primary}
          fontWeight={"bold"}
        />
      </View>
      <Spacer height={20}/>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: moderateScale(16),
        }}
      >
        <View
          style={{
            height: verticalScale(100),
            width: "48%",borderRadius:10,elevation:5,alignItems:"center",justifyContent:"center",
            backgroundColor: colors.white,
          }}
        >
            <CustomText label="This Month" fontSize={12} />
        <CustomText
          label="$504.97"
          fontSize={20}
          color={colors.primary}
          fontWeight={"bold"}
        />
        </View>
        <View
          style={{
            height: verticalScale(100),
            width: "48%",borderRadius:10,elevation:5,alignItems:"center",justifyContent:"center",
            backgroundColor: colors.white,
          }}
        >
            <CustomText label="Total Earnings" fontSize={12} />
        <CustomText
          label="$904.67"
          fontSize={20}
          color={colors.primary}
          fontWeight={"bold"}
        />
        </View>
      </View>

      <View
        style={{
          height: verticalScale(50),
          width: scale(200),
          backgroundColor: colors.primary,
          position: "absolute",
          bottom: 100,
          right: 0,
          borderBottomLeftRadius: 100,
          borderTopLeftRadius: 100,
          zIndex: 100,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          // elevation:10
        }}
      >
        <CustomText
          label={"Booking Count:"}
          fontSize={14}
          color={colors.lightBlack}
        />
        <Spacer width={10} />
        <CustomText
          label={"46"}
          fontSize={18}
          fontWeight={"bold"}
          color={colors.lightBlack}
        />
      </View>
    </View>
  );
};

export default MyEarnings;
