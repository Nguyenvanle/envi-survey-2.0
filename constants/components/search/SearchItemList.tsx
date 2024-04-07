import { container } from "@/constants/Styles";
import SearchItem1 from "@/constants/components/search/SearchItem1";
import SearchItem2 from "@/constants/components/search/SearchItem2";
import SearchItem3 from "@/constants/components/search/SearchItem3";
import SearchItem4 from "@/constants/components/search/SearchItem4";
import SearchItem5 from "@/constants/components/search/SearchItem5";
import SearchItem6 from "@/constants/components/search/SearchItem6";
import SearchItem7 from "@/constants/components/search/SearchItem7";
import SearchItem8 from "@/constants/components/search/SearchItem8";
import { Platform, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function indexSearchPage(userId: any) {
  const user1 = {
    name: "Lê Dương Anh Tú" || "undefine",
    position: "Quản lý" || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  const user2 = {
    name: "Trần Quang Khái" || "undefine",
    position: "Quản lý" || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  const user3 = {
    name: "Nguyễn Văn Lẹ" || "undefine",
    position: "Quản lý" || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  const user4 = {
    name: "Nguyễn Lê Tiến Đạt" || "undefine",
    position: "Quản lý" || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  const user5 = {
    name: "Nguyễn Hưng Thịnh" || "undefine",
    position: "Quản lý" || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  const user6 = {
    name: "Hà Ngọc Dinh" || "undefine",
    position: "Nhân viên" || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  const user7 = {
    name: "Lê Thịnh Hưng" || "undefine",
    position: "Nhân viên" || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  const user8 = {
    name: "Nguyễn Quốc Duy" || "undefine",
    position: "Nhân viên" || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  if (Platform.OS === "ios") {
    return (
      <ScrollView
        style={{
          ...container.scrollView,
          paddingTop: "35%",
        }}
      >
        <SafeAreaProvider style={{ ...container.root, paddingBottom: 250 }}>
          <SearchItem1 user={user1}></SearchItem1>
          <SearchItem2 user={user2}></SearchItem2>
          <SearchItem3 user={user3}></SearchItem3>
          <SearchItem4 user={user4}></SearchItem4>
          <SearchItem5 user={user5}></SearchItem5>
          <SearchItem6 user={user6}></SearchItem6>
          <SearchItem7 user={user7}></SearchItem7>
          <SearchItem8 user={user8}></SearchItem8>
        </SafeAreaProvider>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={container.scrollView}>
        <SafeAreaProvider style={container.root}>
          <SearchItem1 user={user1}></SearchItem1>
          <SearchItem2 user={user2}></SearchItem2>
          <SearchItem3 user={user3}></SearchItem3>
          <SearchItem4 user={user4}></SearchItem4>
          <SearchItem5 user={user5}></SearchItem5>
          <SearchItem6 user={user6}></SearchItem6>
          <SearchItem7 user={user7}></SearchItem7>
          <SearchItem8 user={user8}></SearchItem8>
        </SafeAreaProvider>
      </ScrollView>
    );
  }
}
