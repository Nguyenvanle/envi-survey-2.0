import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { signUp } from "@/constants/logic/useFirebaseUser";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function signUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUpHandler = async () => {
    setLoading(true);

    const signInMethod = await signUp(email, password);

    if (signInMethod.success) {
      Alert.alert("Thông Báo", "Đăng ký thành công 🥰", [
        {
          text: "Ok",
          onPress: () => {
            console.log("signUp -> setInfoUser");
            router.replace("/(auth)/setInfoUser");
          },
        },
      ]);
    } else {
      alert("Đăng ký thất bại \n\n" + signInMethod.message);
    }

    setLoading(false);
  };

  return (
    <View style={{ ...container.root, paddingBottom: 0 }}>
      <View style={{ ...container.rootNoColor }}>
        <View
          style={{
            ...container.header,
            flexDirection: "row",
          }}
        >
          <Text style={{ ...text.headerPrimary, fontSize: 24 }}>
            Đăng Ký Tài Khoản
          </Text>
        </View>

        <View style={container.Center}>
          <View style={{ ...container.input }}>
            <Text style={{ ...text.label }}>Email</Text>
            <View style={container.button}>
              <TextInput
                style={input.normal}
                textContentType="emailAddress"
                value={email}
                placeholder="Nhập email"
                placeholderTextColor={Colors.selector}
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={{ ...container.input }}>
            <Text style={text.label}>Mật khẩu</Text>
            <View style={container.button}>
              <TextInput
                style={input.normal}
                secureTextEntry={true}
                value={password}
                textContentType="password"
                placeholder="Nhập mật khẩu"
                placeholderTextColor={Colors.selector}
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
                placeholderTextColor={Colors.selector}
                onChangeText={() => {}}
                autoCapitalize="none"
                secureTextEntry={true}
                textContentType="password"
              />
            </View>
          </View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <>
            <View style={container.button}>
              {/* 'replace' to remove back button */}
              <TouchableOpacity style={button.primary} onPress={signUpHandler}>
                <Text style={{ ...button.textPrimary }}>Đăng Ký</Text>
                {/* opPress={signUp}*/}
              </TouchableOpacity>
              {/* 'replace' to remove back button */}
            </View>
          </>
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: Colors.white }}>Bạn đã có tài khoản? </Text>
          <Link
            href={"/signIn"}
            style={{ ...text.header, fontSize: 18, color: Colors.primary }}
          >
            Đăng Nhập
          </Link>
        </View>
      </View>
    </View>
  );
}
