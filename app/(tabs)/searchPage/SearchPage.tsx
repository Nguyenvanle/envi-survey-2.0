import Colors from "@/constants/Colors";
import { button, container, input } from "@/constants/Styles";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SearchPage() {
  return (
    <View style={container.root}>
      <Image
        source={require("@/assets/images/illustration.png")}
        style={styles.welcome}
      ></Image>
      <View style={container.inputsearch}>
        <View style={container.buttonsearch}>
          <TextInput style={input.normal} placeholder="Tìm Kiếm Dự Án" />
        </View>
        <View style={container.buttonsearch}>
          <Link href={"/homePage/indexHome"} asChild>
            {/* 'replace' to remove back button */}
            <TouchableOpacity
              style={{ ...button.primary, backgroundColor: Colors.white }}
            >
              <Text style={button.textLight}>Hủy</Text>
            </TouchableOpacity>
          </Link>
          <Link href={"/searchPage/ResultPage"} asChild>
            <TouchableOpacity style={button.primary}>
              <Text style={button.textPrimary}>Xác Nhận</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    width: "auto",
    height: "auto",
    minWidth: 260,
    minHeight: 262,
    maxWidth: 260 * 3,
    maxHeight: 262 * 3,
    marginRight: 30,
    marginBottom: 10,
    flexShrink: 0,
  },
});
