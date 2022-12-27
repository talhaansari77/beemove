import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import CustomHeader from "../../../components/CustomHeader";
import CustomText from "../../../components/CustomText";
import { AntDesign, Feather, Octicons } from "@expo/vector-icons";
import { colors } from "../../../../Utils/Colors";
import { images } from "../../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import commonStyles from "../../../../Utils/CommonStyles";
import { scale, verticalScale } from "react-native-size-matters";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Profile = () => {
  const data = [
    {
      id: 1,
      label: "Phone",
      name: "1234567890",
      icon: () => <Feather name="phone" size={20} color={colors.primary} />,
    },
    {
      id: 2,
      label: "Referral Id",
      name: "523klsd",
      icon: () => <Octicons name="cross-reference"  size={20}  color={colors.primary}/>,
    },
    {
      id: 3,
      label: "User Type",
      name: "Driver",
      icon: () => <Feather name="user"  size={20}  color={colors.primary}/>,
    },
    {
      id: 4,
      label: "Vehicle Type",
      name: "Car",
      icon: () => <AntDesign name="car"   size={20} color={colors.primary}/>,
    },
    {
      id: 5,
      label: "Driver Rating",
      name: "4.5",
      icon: () => <AntDesign name="like2"   size={20} color={colors.primary}/>,
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ height: screenHeight / 3 }}>
        <Image
          source={images.profileBg}
          //   resizeMode={"contain"}
          style={{ height: screenHeight / 3.9, width: "100%" }}
        />
        {/* profile detail container*/}
        <View style={{ position: "absolute" }}>
          <View
            style={{
              paddingVertical: 10,
              justifyContent: "center",
              width: screenWidth,
              paddingHorizontal: 15,
            }}
          >
            <CustomHeader
              LeftSide={() => (
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color={colors.lightText}
                />
              )}
              Center={() => (
                <CustomText
                  label="Profile"
                  alignSelf={"center"}
                  fontSize={16}
                  fontWeight={"bold"}
                  color={colors.lightText}
                />
              )}
              RightSide={() => (
                <Feather name="edit" size={18} color={colors.lightText} />
              )}
            />
          </View>
          <Spacer height={20} />
          <View
            style={{
              flexDirection: "row",
              paddingLeft: verticalScale(20),
              paddingRight: verticalScale(30),
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <CustomText
                label="Danial Rozer"
                fontSize={16}
                color={colors.lightText}
              />
              <CustomText
                label="danialrozer@email.com"
                fontSize={10}
                color={colors.lightText}
              />
            </View>
            <View
              style={{
                height: screenHeight / 7,
                width: screenHeight / 7,
                backgroundColor: colors.primary,
                borderRadius: screenHeight / 7,
                borderWidth: 3,
                borderColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={images.profilePic}
                resizeMode={"contain"}
                style={{ height: screenHeight / 7.3 }}
              />
            </View>
          </View>
        </View>
      </View>
      <Spacer height={20} />

      <View style={{ paddingHorizontal: scale(25) }}>
        {data.map((item) => (
          <>
            <InfoView label={item.label} name={item.name} icon={item.icon} />
            <Spacer height={20} />
          </>
        ))}
      </View>
    </View>
  );
};

const InfoView = ({label,name,icon}) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View
      style={{
        height: screenHeight / 17,
        width: screenHeight / 17,
        borderRadius: screenHeight / 17,
        backgroundColor: colors.white,
        elevation: 5,
        justifyContent:"center",
        alignItems:'center'
      }}
    >
        {icon()}
    </View>
    <Spacer width={20} />
    <View>
      <CustomText label={label} fontSize={10} />
      <CustomText label={name} fontSize={14} />
    </View>
  </View>
);
export default Profile;
