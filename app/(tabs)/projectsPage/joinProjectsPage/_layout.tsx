import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Stack, router, useGlobalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";
//============ Là tệp định nghĩa layout chung cho các màn hình trong ứng dụng ===============

export default function Layout() {
  // https://docs.expo.dev/router/advanced/stack/ to Custom Header
  const { projectID } = useGlobalSearchParams();
  const pressHandler = () => {
    console.log("Đã sao chép");
    console.log("Form -> Success");
    router.replace("/(tabs)/createPage/indexCreateProject");
  };
  const pressHandler2 = () => {
    console.log("Đã sao chép");
    console.log("Form -> Success");
    router.replace(
      `/projectsPage/projectsInfoPage/sampList/desForm/${projectID}`
    );
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
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="enterLink"
        options={{
          headerTitle: "Link dự án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
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
        name="performProject"
        options={{
          headerTitle: "Thực hiện khảo sát",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ ...container.button, flex: 0 }}
                onPress={pressHandler2}
              >
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
            );
          },
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
