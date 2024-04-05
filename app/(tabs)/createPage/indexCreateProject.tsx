import Colors from "@/constants/Colors";
import { button, container } from "@/constants/Styles";
import { useSignOut } from "@/constants/logic/useFirebaseUser";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

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
        {/* <Link href={"/"} replace asChild> */}
        <TouchableOpacity
          style={{ ...button.primary, backgroundColor: Colors.red }}
          onPress={useSignOut}
        >
          <Text style={button.textPrimary}>Đăng Xuất</Text>
        </TouchableOpacity>
        {/* </Link> */}
      </View>
    </View>
  );
}
