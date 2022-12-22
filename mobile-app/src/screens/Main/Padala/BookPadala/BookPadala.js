import { StyleSheet, Text, View,ScrollView, Platform,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import commonStyles from '../../../../../Utils/CommonStyles';
import MainTopHeader from '../../../../components/MainTopHeader';
import { Spacer } from '../../../../components/Spacer';
import PercentageSpacer from '../../../../components/PercentageSpacer';
import CustomTextInput from '../../../../components/CustomTextInput';
import { colors } from '../../../../../Utils/Colors';
import CustomText from '../../../../components/CustomText';
import BookPadalaBottom from './BookPadalaBottom';
import { verticalScale } from 'react-native-size-matters';
import BookPadalaTop from './BookPadalaTop';

const BookPadala = () => {

    
    const inputData = [
        {
          id: 1,
          withLabel: "Pick-Up Address details",
          placeholder: "Unit number & Street number",
        },
        {
          id: 2,
          
          placeholder: "Contact Number",
          rightLabel:require("../../../../../assets/images/telephone.png")
        },
        { id: 3, placeholder: "Contact Name" ,
        rightLabel:require("../../../../../assets/images/user.png")

    },
      ];
  return (
    <View style={commonStyles.container2}>
    <Spacer height={Platform.OS == "ios" ? 40 : 5} />

    <ScrollView style={{ flex: 1 }}>
      <Spacer height={10} />
        <MainTopHeader
          txt={"Padala"}
          img={require("../../../../../assets/images/time.png")}
        />
        <Spacer height={20} />
        <BookPadalaTop/>

        {/* <TopRideContainer /> */}

        <PercentageSpacer height={"50%"} />

        {inputData.map((item) => {
          return (
            <>
              <CustomTextInput
                withLabel={item.withLabel}
                placeholder={item.placeholder}
                fontSize={12}
                paddingLeft={20}
                rightLabel={item.rightLabel}
                placeholderTextColor={"#9C9C9C"}
                fontFamily={"Roboto-Light"}
              />
              <Spacer height={20} />
            </>
          );
        })}
      

        <Spacer height={10}/>
        <BookPadalaBottom/>
        <Spacer height={20}/>


        <CustomTextInput
                withLabel={"Items Description"}
                placeholder={"Write description here..."}
                fontSize={12}
                alignItems="flex-start"
                multiline={true}
                height={verticalScale(100)}
                paddingLeft={20}
                // marginTop={verticalScale(10)}
                placeholderTextColor={"#9C9C9C"}
                fontFamily={"Roboto-Light"}
              />

     

    
      </ScrollView>
    </View>
  )
}

export default BookPadala

const styles = StyleSheet.create({
  

})