import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import ButtonFillContainer from "@/constants/components/create/ButtonFillContainer";
import { ButtonSignOut } from "@/constants/components/create/ButtonSignOut";
import PositionDropdown from "@/constants/components/create/DropdownPosition";
import MyTimePicker from "@/constants/components/create/MyTimePickerModal";
import { Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function signUp(userId: any) {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;
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
          // router.replace("/");
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

  const signUp = async () => {
    setLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check your emails!");
    } catch (error: any) {
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  if (true)
    return (
      <ScrollView style={{ ...container.scrollView, paddingHorizontal: 10 }}>
        <SafeAreaProvider style={container.root}>
          {/* Title */}
          <Text style={{ ...text.headerPrimary, paddingTop: 50 }}>Đăng Ký</Text>
          {/* Name Input */}
          <View style={container.input}>
            <Text style={text.label}>Nhập Họ và Tên:</Text>
            <View style={container.button}>
              <TextInput
                style={{ ...input.normal }}
                placeholder="Nhập Họ Tên"
                onChangeText={() => {}}
              />
            </View>
          </View>
          {/* Email Input */}
          <View style={{ ...container.input }}>
            <Text style={{ ...text.label }}>Tài khoản</Text>
            <View style={container.button}>
              <TextInput
                style={input.normal}
                textContentType="emailAddress"
                value={email}
                placeholder="Nhập email "
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          {/* Password Input */}
          <View style={{ ...container.input }}>
            <Text style={text.label}>Mật khẩu</Text>
            <View style={container.button}>
              <TextInput
                style={input.normal}
                secureTextEntry={true}
                value={password}
                textContentType="password"
                placeholder="Nhập mật khẩu "
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
          {/* Confirm Password Input */}
          <View style={container.input}>
            <Text style={text.label}>Nhập lại mật khẩu:</Text>
            <View style={container.button}>
              <TextInput
                style={{ ...input.normal }}
                placeholder="Nhập lại mật khẩu"
                onChangeText={() => {}}
              />
            </View>
          </View>
          {/* Select Position Input */}
          <View style={{ ...container.input, paddingBottom: 10 }}>
            <Text style={text.label}>Chọn chức vụ:</Text>
            <View style={{ ...container.button }}>
              <PositionDropdown />
            </View>
          </View>
          {/* them tam mot xoa */}
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
          {/* Birth Day Input */}
          <View style={container.input}>
            <Text style={text.label}>Ngày Sinh:</Text>
            <View style={container.button}>
              <MyTimePicker />
            </View>
          </View>

          {/* Submit Info */}
          {/* Create a button container */}
          <View style={container.button}>
            <Link href={"/authScreen"} asChild>
              {/* 'replace' to remove back button */}
              <TouchableOpacity
                style={{ ...button.primary, backgroundColor: Colors.red }}
              >
                <Text style={button.textLight}>Hủy</Text>
              </TouchableOpacity>
            </Link>

            {/* 'replace' to remove back button */}
            <TouchableOpacity style={button.primary} onPress={() => signUp()}>
              <Text style={button.textPrimary}>Xác Nhận</Text>
            </TouchableOpacity>
          </View>

          <ButtonSignOut color={"red"}></ButtonSignOut>
        </SafeAreaProvider>
      </ScrollView>
    );
  else
    return (
      <SafeAreaProvider
        style={{
          ...container.root,
        }}
      >
        <Text
          style={{
            ...text.headerPrimary,
            textAlign: "center",
            alignSelf: "stretch",
          }}
        >
          Bạn Chưa Có Dự Án 🧐
        </Text>

        <Text
          style={{
            ...text.headerPrimary,
            textAlign: "center",
            fontSize: 14,
            color: Colors.white,
          }}
        >
          Nhấn vào đây để tham gia dự án bạn nhé 👇🏻
        </Text>

        <Text
          style={{
            ...text.headerPrimary,
            textAlign: "center",
            fontSize: 16,
            color: Colors.success,
          }}
        >
          Lưu ý: Cần mã dự án và mật khẩu dự án
        </Text>

        <ButtonFillContainer
          link={"../projectsPage/joinProjectsPage/enterPassword"}
          color={Colors.primary}
          onpress={null}
          title={"Tham Gia Dự Án"}
        ></ButtonFillContainer>
      </SafeAreaProvider>
    );
}
