import Colors from "@/constants/Colors";
import { container, input, text } from "@/constants/Styles";
import { signIn, signUp } from "@/constants/logic/useFirebaseUser";
import { Button } from "@rneui/base";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function authScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    const result = await signIn(email, password);
    if (result.success) {
      alert("Đăng nhập thành công 🥰");
      router.replace("/(tabs)/homePage/indexHome");
    } else {
      alert("Đăng nhập thất bại: " + result.message);
    }
    setLoading(false);
  };

  const handleSignUp = async () => {
    setLoading(true);
    const result = await signUp(email, password);
    if (result.success) {
      alert("Đăng ký thành công 🥰");
    } else {
      alert("Sign up failed: " + result.message);
    }
    setLoading(false);
  };

  return (
    <SafeAreaProvider style={container.root}>
      <View style={container.input}>
        <Text style={text.label}>Tài khoản</Text>
        <View style={container.button}>
          <TextInput
            style={input.normal}
            textContentType="emailAddress"
            value={email}
            placeholder="Nhận tài khoản"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
      <View style={container.input}>
        <Text style={text.label}>Mật khẩu</Text>
        <View style={container.button}>
          <TextInput
            style={input.normal}
            secureTextEntry={true}
            value={password}
            textContentType="password"
            placeholder="Nhận mật khẩu"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={Colors.white} />
      ) : (
        <>
          <Button title="SignIn" onPress={() => handleSignIn()} />
          <Button title="SignUp" onPress={() => handleSignUp()} />
        </>
      )}
    </SafeAreaProvider>
  );
}
