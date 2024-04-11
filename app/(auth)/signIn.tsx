import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { signIn } from "@/constants/logic/useFirebaseUser";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInHandler = async () => {
    setLoading(true);

    const signInMethod = await signIn(email, password);

    if (signInMethod.success) {
      Alert.alert("Thông Báo", "Đăng nhập thành công 🥰");
    } else {
      alert("Đăng nhập thất bại \n\n" + signInMethod.message);
    }

    setLoading(false);
  };

  return (
    <View style={{ ...container.root, paddingBottom: 0 }}>
      <View style={{ ...container.rootNoColor }}>
        <Text style={{ ...text.headerPrimary, fontSize: 36 }}>Đăng nhập</Text>

        <View style={container.Center}>
          <View style={{ ...container.input }}>
            <Text style={{ ...text.label }}>Email</Text>
            <View style={container.button}>
              <TextInput
                style={input.normal}
                textContentType="emailAddress"
                value={email}
                placeholder="Nhập email"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={{ ...container.input, marginBottom: 60 }}>
            <Text style={text.label}>Mật khẩu</Text>
            <View style={container.button}>
              <TextInput
                style={input.normal}
                secureTextEntry={true}
                value={password}
                textContentType="password"
                placeholder="Nhập mật khẩu"
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
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
              <Link href={"/signUp"} asChild>
                <TouchableOpacity style={button.light}>
                  <Text style={button.textLight}>Đăng Ký</Text>
                </TouchableOpacity>
              </Link>
              {/* 'replace' to remove back button */}

              <TouchableOpacity style={button.primary} onPress={signInHandler}>
                <Text style={button.textPrimary}>Đăng Nhập</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
