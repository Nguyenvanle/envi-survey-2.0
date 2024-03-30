import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { button, container, description } from "@/constants/Styles";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={container.root}>
      <View style={container.box}>
        <View style={container.text}>
          <Text style={description.headline}>Dang nhap thanh cong</Text>
          <Text>Ma quan li cua ban la</Text>
          <Text>QL2110082</Text>
        </View>
        <View style={container.button}>
          <Link href={"/(tabs)/homePage/indexHome"} replace asChild>
            <TouchableOpacity style={button.primary}>
              <Text style={button.textPrimary}>Xong</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
