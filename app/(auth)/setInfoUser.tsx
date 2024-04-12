import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import MyTimePicker from "@/constants/components/create/MyTimePickerModal";
import { setInfoUserMethod } from "@/constants/logic/useFirebaseUser";
import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function setInfoUser() {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [isLoading, setLoading] = useState(false);

  const setInfoUserHandler = async () => {
    setLoading(true);
    await setInfoUserMethod(fullName, position);
    setLoading(false);
  };

  return (
    <ScrollView style={{ ...container.scrollView, paddingHorizontal: 10 }}>
      <SafeAreaProvider style={container.root}>
        <Text style={{ ...text.headerPrimary, fontSize: 24, paddingTop: 30 }}>
          Cung cấp thông tin
        </Text>

        <View style={container.input}>
          <Text style={text.label}>Họ và Tên:</Text>
          <View style={container.button}>
            <TextInput
              style={input.normal}
              placeholder="Nhập họ và tên của bạn"
              onChangeText={setFullName}
              value={fullName}
            />
          </View>
        </View>

        <View style={container.input}>
          <Text style={text.label}>Chức vụ:</Text>
          <View style={container.button}>
            <TextInput
              style={input.normal}
              placeholder="Chọn chức vụ của bạn"
              onChangeText={setPosition}
              value={position}
            />
          </View>
        </View>
        {/* <View style={{ ...container.input }}>
          <Text style={text.label}>Chọn chức vụ:</Text>
          <View style={{ ...container.button }}>
            <PositionDropdown />
          </View>
        </View> */}

        {/* Birth Day Input */}
        <View style={container.input}>
          <Text style={text.label}>Ngày sinh:</Text>
          <View style={container.button}>
            <MyTimePicker />
          </View>
        </View>
        {/* Phone Input */}
        <View style={container.input}>
          <Text style={text.label}>Số điện thoại:</Text>
          <View style={container.button}>
            <TextInput
              style={input.normal}
              placeholder="Nhập số điện thoại của bạn"
            />
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <>
            <View style={container.button}>
              <TouchableOpacity
                style={button.primary}
                onPress={() => setInfoUserHandler()}
              >
                <Text style={button.textPrimary}>Cập Nhật</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </SafeAreaProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
  },
});
