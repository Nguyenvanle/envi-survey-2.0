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
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="enterPassword"
        options={{
          headerTitle: "Tham gia dự án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="successJoinProject"
        options={{
          headerTitle: "Tham gia thành công",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="enterLink"
        options={{
          headerTitle: "Link dự án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="performProject"
        options={{
          headerTitle: "Thực hiện khảo sát",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="listEmployees"
        options={{
          headerTitle: "Nhân Viên",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
