import Colors from "@/constants/Colors";
import { container, text } from "@/constants/Styles";
import ButtonFillContainer from "@/constants/components/create/ButtonFillContainer";
import { useFirebaseUser } from "@/constants/logic/useFirebaseUser";
import { Button } from "@rneui/themed";
import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function createPage(userId: any) {
  const { username, isLoading, userPosition } = useFirebaseUser(userId);

  if (isLoading) {
    return (
      <SafeAreaProvider style={container.root}>
        <Button
          title="loading"
          type="clear"
          loading
          loadingProps={{ size: 70, color: Colors.muted }}
        />
      </SafeAreaProvider>
    );
  }

  if (userPosition === "Quản Lý")
    return (
      <ScrollView style={container.scrollView}>
        <SafeAreaProvider style={container.root}></SafeAreaProvider>
      </ScrollView>
    );
  else
    return (
      <SafeAreaProvider
        style={{
          ...container.root,
        }}
      >
        <Text
          style={{
            ...text.headerPrimary,
            textAlign: "center",
            alignSelf: "stretch",
          }}
        >
          Bạn Chưa Có Dự Án 🧐
        </Text>

        <Text
          style={{
            ...text.headerPrimary,
            textAlign: "center",
            fontSize: 14,
            color: Colors.white,
          }}
        >
          Nhấn vào đây để tham gia dự án bạn nhé 👇🏻
        </Text>

        <Text
          style={{
            ...text.headerPrimary,
            textAlign: "center",
            fontSize: 16,
            color: Colors.success,
          }}
        >
          Lưu ý: Cần mã dự án và mật khẩu dự án
        </Text>

        <ButtonFillContainer
          link={"../projectsPage/joinProjectsPage/enterPassword"}
          color={Colors.primary}
          replace={false}
        ></ButtonFillContainer>
      </SafeAreaProvider>
    );
}
