import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { button, container } from "@/constants/Styles";
import { Button, Icon } from "@rneui/base";
import { Link, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function indexProjectsPage() {
  return (
    <SafeAreaProvider style={container.root}>
      <Text style={button.textPrimary}></Text>
      <Button
        radius={"md"}
        type="solid"
        onPress={() => {
          router.navigate("/projectsPage/joinProjectsPage/enterPassword");
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
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
