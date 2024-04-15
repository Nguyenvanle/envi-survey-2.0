import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { addLinkForm } from "@/constants/logic/projectFirebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "@rneui/themed";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function PasteLinkScreen() {
  const [link, setLink] = useState("");

  const pressHandler = async () => {
    if (!link) {
      Alert.alert("Lỗi", "Vui lòng nhập liên kết đầy đủ 😊", [{ text: "Ok" }]);
      return;
    }

    try {
      const projectId = await AsyncStorage.getItem("@projectID");
      if (projectId !== null) {
        // Dữ liệu đã được lấy và có thể sử dụng
        console.log("Dữ liệu đã được lấy và có thể sử dụng ", projectId);
        addLinkForm(projectId, link);
      } else console.error("projectId === null");
    } catch (e) {
      // error reading value
      console.error("Lỗi khi lấy projectID:", e);
    }

    // Logic xử lý sau khi liên kết hợp lệ
    Alert.alert(
      "Tạo dự án thành công ✔️",
      "Dự án của bạn đã được lưu vào hệ thống \nTruy cập vào trang chủ để xem chi tiết dự án này",
      [
        {
          text: "OK",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("@projectID");
              console.log("projectID đã được xóa khỏi asyncStorage");
            } catch (e) {
              console.error("Lỗi khi xóa projectID:", e);
            }

            console.log("pastLink -> index");
            router.replace("/");
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={container.scrollView}>
      <SafeAreaProvider style={container.root}>
        <Text style={text.headerPrimary}>Nhập Liên Kết Google Form</Text>
        <Image
          source={require("@/assets/images/illustration.png")}
          style={styles.welcome}
        ></Image>
        <View style={{ ...container.input }}>
          <Text style={{ ...text.label }}>Liên kết</Text>
          <View style={container.button}>
            <TextInput
              style={input.normal}
              textContentType="URL"
              value={link}
              placeholder="Dán liên kết vào đây"
              autoCapitalize="none"
              onChangeText={(text) => setLink(text)}
            />
          </View>
        </View>

        {/* Create a button container */}
        <View style={container.button}>
          <Link href={"/(tabs)/createPage/indexCreateProject"} asChild replace>
            {/* 'replace' to remove back button */}
            <TouchableOpacity
              style={{ ...button.light, backgroundColor: Colors.red }}
            >
              <Text style={button.textLight}>Hủy</Text>
            </TouchableOpacity>
          </Link>
          {/* 'replace' to remove back button */}
          <TouchableOpacity style={button.primary} onPress={pressHandler}>
            <Text style={button.textPrimary}>Xác Nhận</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    </ScrollView>
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
