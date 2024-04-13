import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { getInitials } from "@/constants/logic/getInitials";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CustomAvatar } from "./CustomAvatar";
import { HomeStyles } from "./HomeStyles";

export function ProjectsList(props: {
  user: {
    name: string;
    position: string;
    projectsTaken: number;
    projectsCompleted: number;
  };
  projects: Array<{
    uid: string;
    name: string;
    manage: string;
    startDate: string;
    endDate: string;
  }>;
}) {
  return props.projects.map((project, index) => (
    <TouchableOpacity
      key={index} // Sử dụng index làm key, tuy nhiên trong thực tế nên sử dụng giá trị duy nhất từ dữ liệu (ví dụ: project.id)
      style={{
        ...HomeStyles.userInfoContainer,
        backgroundColor: Colors.blueWhite,
      }}
      onPress={() => {
        router.replace(`/(tabs)/projectsPage/projectsInfoPage/${project.uid}`);
        console.log(project.uid);
      }}
    >
      {/* Nội dung còn lại của component */}
      <View
        style={{
          ...HomeStyles.infoContainer,
          alignSelf: "stretch",
        }}
      >
        <View
          style={{
            maxHeight: 47,
            minHeight: 17,
            height: "auto",
            flex: 0,
          }}
        >
          {CustomAvatar(getInitials, props.user)}
        </View>

        <View style={{ ...HomeStyles.namePosition, flex: 1 }}>
          <Text
            style={{
              ...HomeStyles.textPrimary,
              color: Colors.gray,
              fontSize: 14,
              lineHeight: 18,
            }}
          >
            {project.name}{" "}
            {/* Update từ props.projects.name sang project.name */}
          </Text>
          <Text
            style={{
              ...HomeStyles.text,
              color: Colors.muted,
              fontSize: 12,
            }}
          >
            <Text>Id: </Text>
            {project.uid}
          </Text>
        </View>
        {/* ... */}
      </View>

      <View style={defaultStyles.separator}></View>

      <View style={HomeStyles.projectContainer}>
        {/* ... */}
        <View style={HomeStyles.divideContainer}>
          <Feather name="clock" size={16} color={Colors.deepBlue} />
          <Text style={{ ...HomeStyles.miniText, color: Colors.deepBlue }}>
            {project.startDate}{" "}
            {/* Update từ props.projects.startDate sang project.startDate */}
          </Text>
        </View>

        <View style={HomeStyles.divideContainer}>
          <Feather name="clock" size={16} color={Colors.red} />
          <Text style={{ ...HomeStyles.miniText, color: Colors.red }}>
            {project.endDate}{" "}
            {/* Update từ props.projects.endDate sang project.endDate */}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ));
}