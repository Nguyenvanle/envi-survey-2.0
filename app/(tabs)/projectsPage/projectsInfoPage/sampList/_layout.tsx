import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function SampLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 30,
        },
        headerShown: false,
        headerBackVisible: true,
      }}
    >
      <Stack.Screen
        name="[sampID]"
        options={{
          headerTitle: "samplingPeriod",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
