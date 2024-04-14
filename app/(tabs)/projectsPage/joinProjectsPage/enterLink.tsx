import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { verifyProjectId } from "@/constants/logic/useFirebaseUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@rneui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function enterPassword() {
  const [pID, setPID] = useState("");
  const [loading, setLoading] = useState(false);

  const successFindHandler = async () => {
    console.log("Tìm thấy dự án");
    try {
      await AsyncStorage.setItem("@joinProjectID", pID);
      console.log("@joinProjectID đã được thêm vào asyncStorage");
    } catch (e) {
      console.error("Lỗi khi thêm projectID:", e);
    }
    console.log("inputProjectID -> inputPassword");
    router.navigate({
      pathname: "/(tabs)/projectsPage/joinProjectsPage/enterPassword",
      params: {pID: pID},
    });
  };

  const pressHandler = async () => {
    setLoading(true);
    console.log("PID: " + pID);
    if (pID !== "") {
      if (await verifyProjectId(pID))
        Alert.alert("Thông báo", "Đã tìm thấy dự án 🥰" + pID, [
          { text: "OK", onPress: successFindHandler },
        ]);
      else
        Alert.alert("Thông báo", "Không tìm thấy dự án, vui lòng nhập lại 🧐", [
          { text: "OK", onPress: () => console.log("Không tìm thấy dự án") },
        ]);
    } else {
      Alert.alert("Thông báo", "Vui lòng nhập mã dự án 🧐", [
        { text: "OK", onPress: () => console.log("Chưa nhập mã dự án") },
      ]);
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  return (
    <View style={container.root}>
      <View style={container.body}>
        <View style={container.header}>
          <Text style={text.headerPrimary}>Điền mã dự án</Text>
        </View>
        <View style={container.input}>
          <Text
            style={text.label}
            aria-label="Label for Username"
            nativeID="labelProjectPassword"
          >
            Mã dự án
          </Text>
          <View style={container.button}>
            <TextInput
              style={input.normal}
              aria-label="input"
              aria-labelledby="labelProjectPassword"
              placeholderTextColor={Colors.selector}
              placeholder="Điền mã của dự án cần tham gia"
              value={pID}
              onChangeText={setPID}
            />
          </View>
        </View>
        <View style={container.button}>
          <TouchableOpacity style={button.primary} onPress={pressHandler}>
            {loading ? (
              <Button loading type="clear" />
            ) : (
              <Text style={button.textPrimary}>Tham gia</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
