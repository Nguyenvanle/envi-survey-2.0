import { FIREBASE_AUTH } from "@/FirebaseConfig";
import Colors from "@/constants/Colors";
import { button, container } from "@/constants/Styles";
import { Link, router } from "expo-router";
import { signOut } from "firebase/auth";
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
          onPress={() => {
            signOut(FIREBASE_AUTH);
            router.replace("/");
          }}
        >
          <Text style={button.textPrimary}>Đăng Xuất</Text>
        </TouchableOpacity>
        {/* </Link> */}
      </View>
    </View>
  );
}
