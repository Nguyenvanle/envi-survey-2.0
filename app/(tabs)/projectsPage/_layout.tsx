import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
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
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="indexProjectsPage"
        options={{
          headerTitle: "indexProjectsPage",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="projectsInfoPage"
        options={{
          headerTitle: "projectsInfoPage",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="joinProjectsPage"
        options={{
          headerTitle: "joinProjectPage",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
