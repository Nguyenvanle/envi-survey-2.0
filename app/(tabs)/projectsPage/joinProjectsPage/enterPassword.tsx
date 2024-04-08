import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { useFirebaseUser } from "@/constants/logic/useFirebaseUser";

import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function enterPassword(userId: any) {
  const { username, isLoading } = useFirebaseUser(userId);
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    setLoading(true);

    try {
      Alert.alert("Thông báo", "Tham gia dự án thành công", [
        { text: "Hủy", onPress: () => console.log("Hủy") },
        { text: "OK", onPress: () => console.log("Đồng ý") },
      ]);
      router.replace("/(tabs)/projectsPage/joinProjectsPage/performProject");
    } catch (error: any) {
      alert("Đăng nhập thất bại: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={container.root}>
      <View style={container.body}>
        <View style={container.header}>
          <Text style={text.header}>Bạn đang tham gia dự án</Text>
          <Text style={text.headerPrimary}>"Khảo sát khu đất 91B"</Text>
        </View>
        <View style={container.input}>
          <Text
            style={text.label}
            aria-label="Label for Username"
            nativeID="labelProjectPassword"
          >
            Mật khẩu
          </Text>
          <View style={container.button}>
            <TextInput
              style={input.normal}
              aria-label="input"
              aria-labelledby="labelProjectPassword"
              placeholder="Vui lòng nhập mật khẩu dự án"
            />
          </View>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <>
            <View style={container.button}>
              <TouchableOpacity style={button.primary} onPress={submit}>
                <Text style={button.textPrimary}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
