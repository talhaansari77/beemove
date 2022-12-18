import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from "react-native-size-matters";
import CustomText from "./CustomText";
import { colors } from "../../Utils/Colors";

const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  leftLabel,
  children,
  ...props
}) => {
  return (
    <View>
    
      <TouchableOpacity
        onPress={props.onPress}
        disabled={!props.onPress}
        style={[
          {
            width: props.width || "100%",
            height: props.height || verticalScale(45),
            borderRadius: props.borderRadius || moderateScale(7),
            backgroundColor: props.backgroundColor ||"#F9F9F9",
            marginTop: props.marginTop || verticalScale(0),
            flexDirection: "row",
            borderWidth:props.borderWidth || 0.5,
            borderColor: props.borderColor  || "#707070",
            alignItems: "center",
            paddingLeft: props.paddingLeft,
          },
        ]}
      >
          {leftLabel ? (
        <View>
          {children}
          
        </View>
      
      ) : null}

        <TextInput
          style={[
            {
              width:  password || eyeClick||props.mic || props.downArrow? props.inputWidth  : "95%",
              height: props.inputHeight || "100%",
              marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.fontFamily || "Roboto-Regular",
              color: props.color || colors.black,
              fontSize: verticalScale(13),
              // textAlign: props.textAlign || "center",
              multiline: props.multiline
              // alignSelf: props.alignItems || "center"
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          multiline={props.multiline}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
        {/* {rightIcon ? (
          <TouchableOpacity
            activeOpacity={0.6}
            disabled={!onPress}
            onPress={() => {
              setRightIcon(!rightIcon);
            }}
          >
            {eyeClick ? (
              <Ionicons
                name="eye-off"
                size={moderateScale(22)}
                style={{ opacity: 0.5 }}
                color={colors.primary}
              />
            ) : (
              <Ionicons
                name="eye"
                size={moderateScale(22)}
                style={{ opacity: 0.5 }}
                color={colors.primary}
              />
            )}
          </TouchableOpacity>
        ) : null} */}

      </TouchableOpacity>
      {error ? (
        <CustomText
          label="* "
          children={error}
          fontSize={verticalScale(8)}
          color={colors.red}
          fontWeight={"600"}
          marginTop={verticalScale(5)}
        />
      ) : null}
    </View>
  );
};
export default CustomTextInput;
const styles = ScaledSheet.create({
  icon: {
    width: "20@s",
    height: "15@vs",
    tintColor: colors.gray,
  },
});
