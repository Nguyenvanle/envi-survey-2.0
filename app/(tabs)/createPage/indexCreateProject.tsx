import Colors from "@/constants/Colors";
import { container, input, text } from "@/constants/Styles";
import ButtonFillContainer from "@/constants/components/create/ButtonFillContainer";
import MyTimePicker from "@/constants/components/create/MyTimePickerModal";
import { useFirebaseUser } from "@/constants/logic/useFirebaseUser";
import { Button } from "@rneui/themed";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function createPage(userId: any) {
  const { username, isLoading, userPosition } = useFirebaseUser(userId);
  const [time, setTime] = useState(new Date());

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
      <ScrollView style={{ ...container.scrollView, paddingHorizontal: 10 }}>
        <SafeAreaProvider style={container.root}>
          {/* Title */}
          <Text style={{ ...text.headerPrimary }}>Nhập thông tin dự án</Text>

          {/* Project Name Input */}
          <View style={container.input}>
            <Text style={text.label}>Họ và Tên:</Text>
            <View style={container.button}>
              <TextInput
                style={{ ...input.normal }}
                placeholder="Nhập tên dự án"
                onChangeText={() => {}}
              />
            </View>
          </View>

          {/* Project Description Input */}
          <View style={container.input}>
            <Text style={text.label}>Mô tả:</Text>
            <View style={container.button}>
              <TextInput
                style={{
                  ...input.normal,
                  height: "auto",
                }}
                placeholder="Nhập mô tả dự án"
                onChangeText={() => {}}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Project Name Input */}
          <View style={container.input}>
            <Text style={text.label}>Họ và Tên:</Text>
            <View style={container.button}>
              <TextInput
                style={{ ...input.normal }}
                placeholder="Nhập tên dự án"
                onChangeText={() => {}}
              />
            </View>
          </View>

          {/* Project Time Input */}
          <View style={container.input}>
            <Text style={text.label}>Thời gian bắt đầu:</Text>
            <View style={container.button}>
              <MyTimePicker />
            </View>
          </View>
        </SafeAreaProvider>
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
