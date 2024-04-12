import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
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

  const pressHandler = () => {
    Alert.alert("Tạo dự án thành công", "Tiếp tục tạo dự án?🧐", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("pastLink -> index");
          router.replace("/");
        },
      },
      {
        text: "Ok",
        onPress: () => {
          console.log("pastLink -> indexCreateProject");
          router.navigate("/(tabs)/createPage/indexCreateProject");
        },
      },
    ]);
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
