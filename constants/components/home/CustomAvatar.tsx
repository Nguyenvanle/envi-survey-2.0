import Colors from "@/constants/Colors";
import { Avatar } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

export function CustomAvatar(
  getInitials: (name: string) => string,
  user: {
    name: string;
    position: string;
    projectsTaken: number;
    projectsCompleted: number;
  }
) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
      }}
    >
      <Avatar
        size={48}
        rounded
        title={getInitials(user.name)} //trả về các chữ cái đầu trong tên
        titleStyle={{ fontSize: 12 }}
        containerStyle={{
          backgroundColor: Colors.gray,
          padding: 10,
        }}
      />
    </View>
  );
}
