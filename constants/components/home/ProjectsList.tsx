import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { getInitials } from "@/constants/logic/getInitials";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { CustomAvatar } from "./CustomAvatar";
import { HomeStyles } from "./HomeStyles";

export function ProjectsList(props: {
  user: {
    name: string;
    position: string;
    projectsTaken: number;
    projectsCompleted: number;
  };
  projects: {
    name: string;
    manage: string;
    startDate: string;
    endDate: string;
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

        <View style={{ ...HomeStyles.namePosition }}>
          <Text
            style={{
              ...HomeStyles.textPrimary,
              color: Colors.gray,
              fontSize: 14,
              lineHeight: 18,
            }}
          >
            {props.projects.name}
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

        <View
          style={{
            ...HomeStyles.icon,
            flexDirection: "row-reverse",
            gap: 4,
          }}
        >
          <SimpleLineIcons name="chart" size={20} color={Colors.muted} />
        </View>
      </View>

      <View style={defaultStyles.separator}></View>

      <View style={HomeStyles.projectContainer}>
        <View style={HomeStyles.divideContainer}>
          <Feather name="clock" size={16} color={Colors.deepBlue} />

          <Text style={{ ...HomeStyles.miniText, color: Colors.deepBlue }}>
            {props.projects.startDate}
          </Text>
        </View>

        <View style={HomeStyles.divideContainer}>
          <Feather name="clock" size={16} color={Colors.red} />

          <Text style={{ ...HomeStyles.miniText, color: Colors.red }}>
            {props.projects.endDate}
          </Text>
        </View>
      </View>
    </View>
  );
}
