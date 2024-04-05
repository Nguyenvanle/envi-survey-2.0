import { FIREBASE_AUTH } from "@/FirebaseConfig";
import Colors from "@/constants/Colors";
import { container, input, text } from "@/constants/Styles";
import { Button } from "@rneui/base";
import { router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function authScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Đăng nhập thành công");
      router.replace("/(tabs)/homePage/indexHome");
    } catch (error: any) {
      alert("Đăng nhập thất bại: " + error.message);
    } finally {
      setLoading(false);
    }
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

  return (
    <SafeAreaProvider style={{ ...container.root, marginBottom: 0 }}>
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
          <Button title="SignIn" onPress={() => signIn()} />
          <Button title="SignUp" onPress={() => signUp()} />
        </>
      )}
    </SafeAreaProvider>
  );
}
