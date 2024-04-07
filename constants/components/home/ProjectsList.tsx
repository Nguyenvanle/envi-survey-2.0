import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { getInitials } from "@/constants/logic/getInitials";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { CustomAvatar } from "./CustomAvatar";
import { HomeStyles } from "./HomeStyles";

const project = {
  name: "Khảo sát đất Cờ Đỏ",
  manage: "CurrentUser",
  startDate: "19/03/2024",
  deadline: "2 days",
};

export function ProjectsList(props: {
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

        <View style={{ ...HomeStyles.namePosition }}>
          <Text
            style={{
              ...HomeStyles.textPrimary,
              color: Colors.gray,
              fontSize: 14,
              lineHeight: 18,
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

        <View
          style={{
            ...HomeStyles.icon,
            flexDirection: "row-reverse",
            gap: 4,
          }}
        >
          <Text
            style={{
              ...HomeStyles.text,
              color: Colors.muted,
              fontSize: 12,
              textAlign: "right",
            }}
          >
            80.5%
          </Text>
          <SimpleLineIcons name="chart" size={20} color={Colors.muted} />
        </View>
      </View>

      <View style={defaultStyles.separator}></View>

      <View style={HomeStyles.projectContainer}>
        <View style={HomeStyles.divideContainer}>
          <MaterialCommunityIcons
            name="folder-check-outline"
            size={16}
            color={Colors.gray}
          />

          <Text style={HomeStyles.miniText}>12 dự án</Text>
        </View>

        <View style={HomeStyles.divideContainer}>
          <MaterialCommunityIcons
            name="folder-check-outline"
            size={16}
            color={Colors.gray}
          />

          <Text style={HomeStyles.miniText}>6 dự án</Text>
        </View>
      </View>
    </View>
  );
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

        <View
          style={{
            ...HomeStyles.icon,
            flexDirection: "row-reverse",
            gap: 4,
          }}
        >
          <Text
            style={{
              ...HomeStyles.text,
              color: Colors.muted,
              fontSize: 12,
              textAlign: "right",
            }}
          >
            80.5%
          </Text>
          <SimpleLineIcons name="chart" size={20} color={Colors.muted} />
        </View>
      </View>

      <View style={defaultStyles.separator}></View>

      <View style={HomeStyles.projectContainer}>
        <View style={HomeStyles.divideContainer}>
          <MaterialCommunityIcons
            name="folder-check-outline"
            size={16}
            color={Colors.gray}
          />

          <Text style={HomeStyles.miniText}>12 dự án</Text>
        </View>

        <View style={HomeStyles.divideContainer}>
          <MaterialCommunityIcons
            name="folder-check-outline"
            size={16}
            color={Colors.gray}
          />

          <Text style={HomeStyles.miniText}>6 dự án</Text>
        </View>
      </View>
    </View>
  );
}
