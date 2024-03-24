import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { description } from "@/constants/Styles";
import { Link } from "expo-router";
import createProjectScreen from "./createProjectScreen";

export default function Page() {
  const openLink = () => {};

  return (
    <View style={styles.container}>
      {/* Create a header image */}
      <Image
        source={require("@/assets/images/illustration.png")}
        style={styles.welcome}
      ></Image>
      {/* Create a description container */}
      <View style={styles.textContainer}>
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
      <View style={styles.buttonContainer}>
        <Link href={"/createProjectScreen"} asChild>
          {/* 'replace' to remove back button */}
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonTextPrimary}>Cấu hình dự án</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/createProjectScreen"} asChild>
          {/* 'replace' to remove back button */}
          <TouchableOpacity style={styles.buttonLight}>
            <Text style={styles.buttonTextLight}>Chia sẻ dự án</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  textContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "67%",
    gap: 4,
    paddingBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
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
  buttonPrimary: {
    width: "auto",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },
  buttonLight: {
    width: "auto",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
  buttonTextPrimary: {
    fontSize: 16,
    color: Colors.white,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    fontStyle: "normal",
    fontWeight: "700",
  },
  buttonTextLight: {
    fontSize: 16,
    color: Colors.gray,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    fontStyle: "normal",
    fontWeight: "700",
  },
});
