import React from "react";
import { Text, View } from "react-native";
import { HomeStyles } from "./HomeStyles";

export function PrimaryTitle() {
  return (
    <View style={{ ...HomeStyles.hello, padding: 10 }}>
      <View style={HomeStyles.textContainer}>
        <Text style={HomeStyles.textPrimary}>Dự án của tôi</Text>
      </View>
    </View>
  );
}
