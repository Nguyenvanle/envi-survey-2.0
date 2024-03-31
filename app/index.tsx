import { FIREBASE_AUTH } from "@/FirebaseConfig";
import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { Button } from "@rneui/base";
import { router } from "expo-router";
import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function index() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user === null) {
        router.replace("/authScreen");
        setUser(user);
      } else {
        console.log("user", user);
      }

      // open comment này ra khi code xong trang

      // router.replace("/(tabs)/accountPage/profileSetupScreen");
      // truy cập nhanh vào trang đỡ phải bấm, close comment lúc code xong trang
    });
  }, []);

  return (
    <SafeAreaProvider style={container.root}>
      <Button
        title="loading"
        type="clear"
        loading
        loadingProps={{ size: 70, color: Colors.muted }}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
