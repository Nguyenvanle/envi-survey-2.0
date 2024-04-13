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
        headerBackVisible: true,
      }}
    >
      <Stack.Screen
        name="[projectID]"
        options={{
          headerTitle: "indexProjectInformation",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="samplingPeriod"
        options={{
          headerTitle: "samplingPeriod",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="destinationForm"
        options={{
          headerTitle: "destinationForm",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
