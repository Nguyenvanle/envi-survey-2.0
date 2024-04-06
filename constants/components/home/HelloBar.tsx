import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { HomeStyles } from "./HomeStyles";

export function HelloBar(props: { name: string | undefined }) {
  return (
    <View style={HomeStyles.hello}>
      <View style={HomeStyles.textContainer}>
        <Text style={HomeStyles.text}>Hello</Text>
        <Text style={HomeStyles.textPrimary}>{props.name}</Text>
      </View>
      <View style={HomeStyles.iconContainer}>
        <AntDesign name="smileo" size={56} color={Colors.teal}></AntDesign>
      </View>
    </View>
  );
}
