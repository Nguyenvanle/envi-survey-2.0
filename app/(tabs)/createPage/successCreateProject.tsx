import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { container, description, button } from "@/constants/Styles";
import { Link } from "expo-router";

export default function successCreateProject() {
  const openLink = () => {};

  return (
    <View style={container.root}>
      {/* Create a header image */}
      <Image
        source={require("@/assets/images/illustration.png")}
        style={styles.welcome}
      ></Image>
      {/* Create a description container */}
      <View style={container.text}>
        <Text style={description.headline}>Tạo dự án thành công</Text>
        <Text style={description.default}>
          Chúc mừng bạn đã khởi tạo thành công dự án
        </Text>
        <Text style={description.bold}>Khảo sát đất Bình Thủy</Text>
        <Text style={description.primary} onPress={openLink}>
          Bạn muốn làm gì tiếp theo?
        </Text>
      </View>
      {/* Create a button container */}
      <View style={container.button}>
        <Link href={"/projectsPage"} asChild>
          {/* 'replace' to remove back button */}
          <TouchableOpacity style={button.primary}>
            <Text style={button.textPrimary}>Cấu hình dự án</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/projectsPage"} asChild>
          {/* 'replace' to remove back button */}
          <TouchableOpacity style={button.light}>
            <Text style={button.textLight}>Chia sẻ dự án</Text>
          </TouchableOpacity>
        </Link>
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
