import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { container } from "@/constants/Styles";
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
        name="searchPage"
        options={{
          headerTitle: "Tìm Kiếm",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
          headerSearchBarOptions: {
            placeholder: "Tìm kiếm dự án",
          },
          headerRight: () => {
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
        }}
      />
      <Stack.Screen
        name="filterPage"
        options={{
          headerTitle: "Filter",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerShown: true,
        }}
      />
    </Stack>
  );
}
