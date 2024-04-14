import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { addUser, initFirebase } from "@/constants/logic/joinProject";
import { router, useGlobalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function enterPassword() {
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState('');

  const {pID} = useGlobalSearchParams();
  const {
    nameProject,
    myPass,
    isLoading} = initFirebase(pID);
if(isLoading) return;
  const submit =  () => {
    if (pass==myPass) {
      try {
        Alert.alert("Thông báo", "Tham gia dự án thành công", [
          { text: "Hủy", onPress: () => console.log("Hủy") },
          { text: "OK", onPress: () => console.log("Đồng ý") },
        ]);
        addUser(pID);
        router.replace("/");
      } catch (error: any) {
        alert("Đăng nhập thất bại: " + error.message);
      } finally {
        setLoading(false);
      }
    }
    else alert("Sai mật khẩu");
  };

  return (
    <View style={container.root}>
      <View style={container.body}>
        <View style={container.header}>
          <Text style={text.header}>Bạn đang tham gia dự án</Text>
          <Text style={text.headerPrimary}>{nameProject}</Text>
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
              placeholderTextColor={Colors.selector}
              aria-labelledby="labelProjectPassword"
              placeholder="Vui lòng nhập mật khẩu dự án"
              value={pass}
              onChangeText={setPass}
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
