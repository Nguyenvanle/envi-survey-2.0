import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { Alert, TouchableOpacity } from "react-native";
//============ Là tệp định nghĩa layout chung cho các màn hình trong ứng dụng ===============

export default function Layout() {
  // https://docs.expo.dev/router/advanced/stack/ to Custom Header
  const pressHandler = () => {
    Alert.alert("Lưu ý", "Hãy sao chép liên kết Form trước khi tiếp tục 🧐", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Chưa sao chép");
        },
      },
      {
        text: "Ok",
        onPress: () => {
          console.log("Đã sao chép");
          console.log("Form -> Success");
          router.navigate("/(tabs)/createPage/pasteLink");
        },
      },
    ]);
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
        name="indexCreateProject"
        options={{
          headerTitle: "Tạo Dự Án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="createProjectScreen"
        options={{
          headerTitle: "Tạo Dự Án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ ...container.button, flex: 0 }}
                onPress={pressHandler}
              >
                <AntDesign name="arrowright" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        }}
      />

      <Stack.Screen
        name="pasteLink"
        options={{
          headerTitle: "Tạo Dự Án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
