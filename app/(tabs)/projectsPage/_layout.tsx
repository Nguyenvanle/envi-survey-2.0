import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
//============ Là tệp định nghĩa layout chung cho các màn hình trong ứng dụng ===============

export default function Layout() {
  // https://docs.expo.dev/router/advanced/stack/ to Custom Header
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
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="IndexProjectInformation"
        options={{
          headerTitle: "Thông Tin Dự Án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="samplingPeriod"
        options={{
          headerTitle: "Thông Tin Dự Án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="destinationForm"
        options={{
          headerTitle: "Thông Tin Dự Án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
