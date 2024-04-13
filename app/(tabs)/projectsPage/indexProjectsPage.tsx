import { container } from "@/constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function indexProjectsPage() {
  return (
    <SafeAreaProvider style={container.root}>
      <Button
        radius={"md"}
        type="solid"
        onPress={() => {
          router.push("/projectsPage/projectsInfoPage/indexProjectInformation");
        }}
      >
        Dự án của tôi
        <AntDesign
          name="addfolder"
          size={16}
          color="white"
          style={{ paddingLeft: 10 }}
        />
      </Button>

      <Button
        radius={"md"}
        type="solid"
        onPress={() => {
          router.push("/(tabs)/projectsPage/joinProjectsPage/enterLink");
        }}
      >
        Tham gia dự án
        <AntDesign
          name="addfolder"
          size={16}
          color="white"
          style={{ paddingLeft: 10 }}
        />
      </Button>

      <Button
        radius={"md"}
        type="solid"
        onPress={() => {
          router.navigate("/projectsPage/joinProjectsPage/listEmployees"); //khong can duoi .tsx
        }}
      >
        Danh sach nhan vien
        <AntDesign
          name="addfolder"
          size={16}
          color="white"
          style={{ paddingLeft: 10 }}
        />
      </Button>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
