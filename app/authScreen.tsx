import { FIREBASE_AUTH } from "@/FirebaseConfig";
import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { Link, router } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

class Person {
  fullName: string;
  position: string;

  constructor(fullName: string, position: string) {
    this.fullName = fullName;
    this.position = position;
  }
  toString() {
    return this.fullName + ", " + this.position;
  }
}

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
  const backgroundImage = require("../assets/images/background.jpg");

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
              <Link href={"/signingUp"} asChild>
                <TouchableOpacity style={button.light}>
                  <Text style={button.textLight}>Đăng Ký</Text>
                </TouchableOpacity>
              </Link>
              {/* 'replace' to remove back button */}

              <TouchableOpacity style={button.primary} onPress={() => signIn()}>
                <Text style={button.textPrimary}>Đăng Nhập</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
