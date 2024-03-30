import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { button, container } from "@/constants/Styles";
import { Link } from "expo-router";

export default function createPage() {
  return (
    <View style={container.root}>
      <View style={container.button}>
        <Link href={"/(tabs)/createPage/successCreateProject"} asChild>
          <TouchableOpacity style={button.primary}>
            <Text style={button.textPrimary}>Xong</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={container.button}>
        <Link href={"/"} replace asChild>
          <TouchableOpacity
            style={{ ...button.primary, backgroundColor: Colors.red }}
          >
            <Text style={button.textPrimary}>Đăng Xuất</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
