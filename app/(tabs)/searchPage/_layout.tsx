import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { useLayoutEffect } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
//============ Là tệp định nghĩa layout chung cho các màn hình trong ứng dụng ===============

export default function Layout() {
  // https://docs.expo.dev/router/advanced/stack/ to Custom Header

  useLayoutEffect(() => {
    if (Platform.OS === "ios") {
    }
  }, []);

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
        name="SearchPage"
        options={{
          headerTitle: "Tìm Kiếm",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ResultPage"
        options={{
          headerTitle: "Kết quả",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
          headerSearchBarOptions: {
            placeholder: "Tìm kiếm dự án",
            textColor: Colors.white,
            hintTextColor: Colors.white,
            headerIconColor: Colors.white,
            shouldShowHintSearchIcon: false,
          },
          headerLeft: () => {
            return (
              <View style={container.button}>
                <Link href={"/(tabs)/searchPage/filterPage"} asChild>
                  <TouchableOpacity>
                    <AntDesign
                      name="filter"
                      size={24}
                      color={Colors.white}
                    ></AntDesign>
                  </TouchableOpacity>
                </Link>
              </View>
            );
          },
          headerRight: () => {
            return <View style={container.button}></View>;
          },
        }}
      />
      <Stack.Screen
        name="filterPage"
        options={{
          headerTitle: "Bộ Lọc",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
        }}
      />
    </Stack>
  );
}
