import Colors from "@/constants/Colors";
import { getInitials } from "@/constants/logic/getInitials";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomAvatar } from "../home/CustomAvatar";
import { HomeStyles } from "../home/HomeStyles";

const project = {
  name: "Khảo sát đất Trà Vinh",
  manage: "CurrentUser",
  startDate: "19/03/2024",
  deadline: "2 days",
};

export default function SearchItem1(props: {
  user: {
    name: string;
    position: string;
    projectsTaken: number;
    projectsCompleted: number;
  };
}) {
  return (
    <View
      style={{
        ...HomeStyles.userInfoContainer,
        backgroundColor: Colors.blueWhite,
      }}
    >
      <View style={HomeStyles.infoContainer}>
        <View
          style={{
            maxHeight: 47,
            minHeight: 17,
            height: "auto",
          }}
        >
          {CustomAvatar(getInitials, props.user)}
        </View>

        <View style={{ ...HomeStyles.namePositionSearch }}>
          <Text
            style={{
              ...HomeStyles.textPrimary,
              color: Colors.gray,
              fontSize: 17,
              lineHeight: 22,
            }}
          >
            {project.name}
          </Text>
          <Text
            style={{
              ...HomeStyles.text,
              color: Colors.muted,
              fontSize: 12,
            }}
          >
            {props.user.name}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
