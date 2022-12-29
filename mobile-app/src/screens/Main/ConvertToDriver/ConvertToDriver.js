import { View, Text, ScrollView, TouchableOpacity, SafeAreaView,Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CustomHeader from "../../../components/CustomHeader";
import { colors } from "../../../../Utils/Colors";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import { FontAwesome } from "@expo/vector-icons";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { images } from "../../../../assets/images";
import { moderateScale, verticalScale } from "react-native-size-matters";
import DrawerContainer from "../../../components/DrawerContainer";
import commonStyles from "../../../../Utils/CommonStyles";

const ConvertToDriver = ({navigation}) => {
  const CenterContent = () => (
    <View style={{ flexDirection: "row"}}>
      <FontAwesome
        name="drivers-license-o"
        size={24}
        color={colors.primary}
        style={{ alignSelf: "center" }}
      />
      <Spacer width={10} />
      <CustomText
        label="Convert to Driver"
        alignSelf={"center"}
        fontSize={17}
      />
    </View>
  );

  const inputData = [
    {
      id: 1,
      placeholder: "SUV",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 2,
      placeholder: "Vehicle Name / Brand Name",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 3,
      placeholder: "Vehicle Mobile No",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 4,
      placeholder: "Vehicle Rehistration / Plate Number",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 5,
      placeholder: "Other Vehicle or Driver Info",
      rightLabel: require("../../../../assets/images/car.png"),
    },
    {
      id: 6,
      placeholder: "Bank Name",
      rightLabel: images.bank,
    },
    {
      id: 7,
      placeholder: "Bank Code",
      rightLabel: images.bank,
    },
    {
      id: 7,
      placeholder: "Bank Account",
      rightLabel: images.bank,
    },
  ];
  return (
    <SafeAreaView>
      <View
        style={{
          //   backgroundColor: colors.primary,
          height: 80,
          justifyContent: "center",
          width: "auto",
          paddingHorizontal: 15,
        }}
      >
        <CustomHeader
         LeftSide={() => (
           
            
          <TouchableOpacity 
          activeOpacity={0.6}
          onPress={()=>navigation.openDrawer()}
          style={commonStyles.iconContainer}>
            <Image
              resizeMode="contain"
              source={images.sort}
              style={commonStyles.img}
            />
          </TouchableOpacity>
        )}

       
          Center={() => <CenterContent />}
        />
      </View>
      <ScrollView>
        {inputData.map((item) => {
          return (
            <>
              <View style={{ width: "90%", alignSelf: "center" }}>
                <CustomTextInput
                  //   withLabel={item.withLabel}
                  placeholder={item.placeholder}
                  fontSize={12}
                  paddingLeft={20}
                  rightLabel={item.rightLabel}
                  placeholderTextColor={"#9C9C9C"}
                  fontFamily={"Roboto-Light"}
                />
              </View>
              <Spacer height={20} />
            </>
          );
        })}
        <TouchableOpacity activeOpacity={0.6} >
        <View
          style={{
            width: "80%",
            height: 140,
            backgroundColor: colors.white,
            borderRadius: 10,
            alignSelf: "center",
          }}
        >
          <CustomText
            label="Upload Your Driving License"
            alignSelf={"center"}
            marginTop={10}
            color={colors.primary}
          />
          <Spacer height={15} />
          <View
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              alignItems:"center"
            }}
          >
            <View>
              <AntDesign name="camerao" size={70} color={colors.grayBorder} />
            </View>
            <View
              style={{ height: 40, width: 1, backgroundColor: colors.black }}
            />
            <CustomText label="(Image Size: Max 2MB)" />
          </View>
        </View>
        </TouchableOpacity>
        <Spacer height={20} />
        
        <CustomButton title={"Submit"} width={"50%"} 
        height={verticalScale(40)}
        alignSelf={"center"} />
        <Spacer height={100} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConvertToDriver;
