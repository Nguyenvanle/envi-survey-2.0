import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import ButtonFillContainer from "@/constants/components/create/ButtonFillContainer";
import CustomDropdown from "@/constants/components/create/DropdownBox";
import MyTimePicker from "@/constants/components/create/MyTimePickerModal";
import { addNewProject } from "@/constants/logic/projectFirebase";
import { useFirebaseUser } from "@/constants/logic/useFirebaseUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@rneui/themed";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function createPage(userId: any) {
  const { isLoading, userPosition, uid } = useFirebaseUser(userId);

  const [projectInfo, setProjectInfo] = useState({
    name: "",
    descript: "",
    start: null, // cần xác định cách lấy dữ liệu từ MyTimePicker
    end: null, // cần xác định cách lấy dữ liệu từ MyTimePicker
    password: "",
    destination: "", // cần xác định cách lấy dữ liệu từ CustomDropdown
    // Các thuộc tính khác nếu cần thiết
    uidManager: uid,
  });

  const handleInputChange = (name: any, value: any) => {
    setProjectInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Hàm gọi khi click nút "Xác Nhận"
  const handleAddProject = () => {
    console.log(projectInfo);
    addNewProject(projectInfo)
      .then(async (projectId) => {
        if (projectId) {
          try {
            await AsyncStorage.setItem("@projectID", projectId);
            if (projectId !== null) {
              console.log("Dữ liệu đã được lấy và có thể sử dụng ", projectId);
            } else console.log("projectId === null");
          } catch (error) {
            // Xử lý lỗi
            console.error("Lỗi khi lấy projectID:", error);
          }
          Alert.alert("Thông báo", "Thêm dự án mới ID: " + projectId, [
            {},
            {
              text: "Ok",
              onPress: () => {
                console.log("indexCreate -> formScreen");
                router.navigate({
                  pathname: "/createPage/pasteLink", // Đây là tên của route mà bạn muốn điều hướng đến.
                  params: { projectId: projectId }, // Đây là object chứa các tham số bạn muốn truyền.
                });
              },
            },
          ]);
          // Tùy thuộc vào logic ứng dụng, bạn có thể chuyển hướng hoặc hiển thị thông báo thành công tại đây
        }
      })
      .catch((error) => {
        console.error("Lỗi khi thêm dự án mới:", error);
        // Xử lý hiển thị thông báo lỗi tại đây
      });
  };

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
                onChangeText={(text) => handleInputChange("name", text)}
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
                onChangeText={(text) => handleInputChange("descript", text)}
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
              <MyTimePicker
                onDateChange={(newDate: any) => {
                  handleInputChange("start", newDate);
                }}
              />
            </View>
          </View>

          {/* Project Time End Input */}
          <View style={container.input}>
            <Text style={text.label}>Chọn thời gian kết thúc:</Text>
            <View style={container.button}>
              <MyTimePicker
                onDateChange={(newDate: any) => {
                  handleInputChange("end", newDate);
                }}
              />
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
                onChangeText={(text) => handleInputChange("password", text)}
              />
            </View>
          </View>

          {/* Project Destination Chose Input */}
          <View style={{ ...container.input, paddingBottom: 10 }}>
            <Text style={text.label}>Chọn địa điểm:</Text>
            <View style={{ ...container.button }}>
              <CustomDropdown
                onLocationChange={(newLocation: any) => {
                  handleInputChange("destination", newLocation);
                }}
              />
            </View>
          </View>

          {/* Project Submit Info */}

          <View style={container.button}>
            <Link href={"/homePage/indexHome"} asChild>
              <TouchableOpacity
                style={{ ...button.primary, backgroundColor: Colors.red }}
              >
                <Text style={button.textLight}>Hủy</Text>
              </TouchableOpacity>
            </Link>

            <TouchableOpacity style={button.primary} onPress={handleAddProject}>
              <Text style={button.textPrimary}>Xác Nhận</Text>
            </TouchableOpacity>
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
          Bạn Muốn Tham Gia Dự Án 🧐
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
          link={"../projectsPage/joinProjectsPage/enterLink"}
          color={Colors.primary}
          onPress={null}
          title={"Tham Gia Dự Án"}
        ></ButtonFillContainer>
      </SafeAreaProvider>
    );
}
