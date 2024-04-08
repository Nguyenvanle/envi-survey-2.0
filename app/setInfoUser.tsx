import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import PositionDropdown from "@/constants/components/create/DropdownPosition";
import MyTimePicker from "@/constants/components/create/MyTimePickerModal";
import { router } from "expo-router";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Keyboard,
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
  const [loading, setLoading] = useState(false);

  const handleSaveProfile = async () => {
    setLoading(true);
    Keyboard.dismiss();

    // Validate data and then save to Firebase
    // Navigate to next screen or pop to previous screen if needed
    if (fullName.length === 0 || position.length === 0) {
      // Thông báo lỗi nếu người dùng không nhập đầy đủ thông tin
      alert("Vui lòng nhập đầy đủ thông tin.");
      setLoading(false);
      return;
    }

    // Lấy UID từ người dùng hiện tại
    const user = FIREBASE_AUTH.currentUser;

    if (user) {
      const uid = user.uid;
      const userData = {
        fullName: fullName,
        position: position,
        // Đặt các trường thông tin khác mà bạn muốn lưu
      };

      const userRef = doc(FIREBASE_DB, "users", uid);

      // Kiểm tra document có tồn tại không
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        try {
          await updateDoc(userRef, userData);
          Alert.alert("Thông Báo", "Cập nhật thông tin thành công 🥰", [
            { text: "Hủy", onPress: () => console.log("Hủy") },
            { text: "Đồng ý", onPress: () => console.log("Đồng ý") },
          ]);
          router.replace("/");
        } catch (error: any) {
          console.error(
            `Lỗi khi cập nhật thông tin người dùng với uid: ${uid}: `,
            error.message
          );
        }
      } else {
        // Nếu userid không tồn tại, thêm người dùng mới

        try {
          await setDoc(doc(FIREBASE_DB, "users", uid), userData);
          alert(`Đã thêm người dùng mới với ID: ` + uid);
        } catch (error) {
          console.error("Lỗi khi thêm người dùng mới: ", error);
        }
      }
    } else {
      // Thông báo lỗi nếu không tìm thấy người dùng
      alert("Không tìm thấy người dùng. Vui lòng đăng nhập lại.");
    }
    console.log(fullName, position);

    setLoading(false);
  };

  return (
    <ScrollView style={{ ...container.scrollView, paddingHorizontal: 10 }}>
      <SafeAreaProvider style={container.root}>
        <Text style={{ ...text.headerPrimary, fontSize: 24, paddingTop: 30 }}>
          Cập nhật thông tin
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
        <View style={{ ...container.input }}>
          <Text style={text.label}>Chọn chức vụ:</Text>
          <View style={{ ...container.button }}>
            <PositionDropdown />
          </View>
        </View>

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
              placeholder="Nhập họ và tên của bạn"
              onChangeText={setFullName}
              value={fullName}
            />
          </View>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <>
            <View style={container.button}>
              <TouchableOpacity
                style={button.primary}
                onPress={() => handleSaveProfile()}
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
