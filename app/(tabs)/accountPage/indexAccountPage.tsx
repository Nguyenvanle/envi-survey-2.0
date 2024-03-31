import { button, container } from "@/constants/Styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function indexAccountPage() {
  return (
    <SafeAreaProvider style={container.root}>
      <Text style={button.textPrimary}>indexAccountPage</Text>
      <Button
        radius={"md"}
        type="solid"
        onPress={() => {
          router.navigate("/projectsPage/joinProjectsPage/enterPassword");
        }}
      >
        Tuỳ chỉnh thông tin cá nhân
        <FontAwesome5
          name="user-cog"
          size={16}
          color="white"
          style={{ paddingLeft: 10 }}
        />
      </Button>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
