import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { container } from "./../../../constants/Styles";
//============ Là tệp định nghĩa layout chung cho các màn hình trong ứng dụng ===============

export default function Layout() {
  // https://docs.expo.dev/router/advanced/stack/ to Custom Header

  const pressHandler = () => {
    console.log("Đã sao chép");
    console.log("Form -> Success");
    router.replace("/(tabs)/projectsPage/indexProjectsPage");
  };

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
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="indexProjectsPage"
        options={{
          headerTitle: "Danh Sách Dự Án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="projectsInfoPage"
        options={{
          headerTitle: "Thông Tin Dự Án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
          headerBackTitleVisible: false,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ ...container.button, flex: 0 }}
                onPress={pressHandler}
              >
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
            );
          },
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
