import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import ButtonFillContainer from "@/constants/components/create/ButtonFillContainer";
import CustomDropdown from "@/constants/components/create/DropdownBox";
import MyTimePicker from "@/constants/components/create/MyTimePickerModal";
import { useFirebaseUser } from "@/constants/logic/useFirebaseUser";
import { Button } from "@rneui/themed";
import { Link } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function createPage(userId: any) {
  const { isLoading, userPosition } = useFirebaseUser(userId);

  const [password, setPassword] = useState("");

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
            <Text style={text.label}>Tên dự án:</Text>
            <View style={container.button}>
              <TextInput
                style={{ ...input.normal }}
                placeholder="Nhập tên cho dự án"
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
                placeholder="Nhập mô tả cho dự án"
                onChangeText={() => {}}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Project Time Start Input */}
          <View style={container.input}>
            <Text style={text.label}>Chọn thời gian bắt đầu:</Text>
            <View style={container.button}>
              <MyTimePicker />
            </View>
          </View>

          {/* Project Time End Input */}
          <View style={container.input}>
            <Text style={text.label}>Chọn thời gian kết thúc:</Text>
            <View style={container.button}>
              <MyTimePicker />
            </View>
          </View>

          {/* Project Password Input */}
          <View style={container.input}>
            <Text style={text.label}>Mật khẩu:</Text>
            <View style={container.button}>
              <TextInput
                style={{ ...input.normal }}
                placeholder="Nhập mật khẩu cho dự án"
                secureTextEntry={true}
                textContentType="password"
                autoCapitalize="none"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>

          {/* Project Destination Chose Input */}
          <View style={{ ...container.input, paddingBottom: 10 }}>
            <Text style={text.label}>Chọn địa điểm:</Text>
            <View style={{ ...container.button }}>
              <CustomDropdown />
            </View>
          </View>

          {/* Project Submit Info */}
          {/* Create a button container */}
          <View style={container.button}>
            <Link href={"/homePage/indexHome"} asChild>
              {/* 'replace' to remove back button */}
              <TouchableOpacity
                style={{ ...button.primary, backgroundColor: Colors.red }}
              >
                <Text style={button.textLight}>Hủy</Text>
              </TouchableOpacity>
            </Link>
            <Link href={"/createPage/createProjectScreen"} asChild>
              {/* 'replace' to remove back button */}
              <TouchableOpacity style={button.primary}>
                <Text style={button.textPrimary}>Xác Nhận</Text>
              </TouchableOpacity>
            </Link>
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
          link={"../projectsPage/joinProjectsPage/enterLink.tsx"}
          color={Colors.primary}
          onPress={null}
          title={"Tham Gia Dự Án"}
        ></ButtonFillContainer>
      </SafeAreaProvider>
    );
}
