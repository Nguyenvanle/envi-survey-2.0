import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import ButtonAccount from "@/constants/components/create/ButtonAccount";
import { InfoCard } from "@/constants/components/home/InfoCard";
import { useFirebaseUser, useSignOut } from "@/constants/logic/useFirebaseUser";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import Feather from "@expo/vector-icons/build/Feather";
import { Button } from "@rneui/themed";
import React from "react";
import { ActivityIndicator, Alert, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function indexAccountPage(userId: any) {
  const {
    username,
    isLoading,
    userPosition: userPosition,
  } = useFirebaseUser(userId);

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
  const user = {
    name: username || "undefine",
    position: userPosition || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };

  const pressHandler = () => {
    Alert.alert("Thông báo", "Bạn có muốn đăng xuất?🧐", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel");
        },
      },
      {
        text: "Ok",
        onPress: () => {
          console.log("Account -> Sign In");
          useSignOut();
        },
      },
    ]);
  };

  return (
    <ScrollView style={container.scrollView}>
      <SafeAreaProvider style={container.root}>
        <InfoCard user={user}></InfoCard>
        <ButtonAccount
          link={"/(tabs)/accountPage/profileSetupScreen"}
          icon={<AntDesign name="user" size={24} color="black" />}
          title={"Cập nhật thông tin cá nhân"}
          isReplace={false}
          onpress={null}
        ></ButtonAccount>
        <ButtonAccount
          link={null}
          icon={<Feather name="info" size={24} color="black" />}
          title={"Phản hồi về ứng dụng"}
          onpress={null}
          isReplace={false}
        ></ButtonAccount>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <ButtonAccount
            link={null}
            icon={<Feather name="log-out" size={24} color="black" />}
            title={"Đăng Xuất"}
            isReplace={true}
            onpress={pressHandler}
          ></ButtonAccount>
        )}
      </SafeAreaProvider>
    </ScrollView>
  );
}