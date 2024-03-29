import Colors from "@/constants/Colors";
import { Octicons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import createPage from "./createPage/indexCreateProject";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.lightGray,
        tabBarStyle: {
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          position: "absolute",
          height: 80,
          paddingBottom: 16,
        },
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 30,
        },
        tabBarItemStyle: {
          gap: -10,
          paddingVertical: 5,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="homePage"
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
          title: "Trang chủ",
          tabBarLabelStyle: {
            fontWeight: "500",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="searchPage"
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="search" size={24} color={color} />
          ),
          title: "Tìm kiếm",
          tabBarLabelStyle: {
            fontWeight: "500",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="createPage"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24 * 2} color={color} />
          ),
          title: "Tạo Dự Án",
          tabBarLabelStyle: {
            display: "none",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="projectsPage"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-multiple"
              size={24}
              color={color}
            />
          ),
          tabBarLabelStyle: {
            fontWeight: "500",
          },
          title: "Dự án",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="joinProjectPage" //mượn tạm chỗ để hiển thị
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={30}
              color={color}
            />
          ),
          tabBarLabelStyle: {
            fontWeight: "500",
          },
          title: "Tài khoản",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Tabs>
  );
}
