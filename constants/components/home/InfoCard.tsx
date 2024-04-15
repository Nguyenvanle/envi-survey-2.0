import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/defaultStyles";
import { getInitials } from "@/constants/logic/getInitials";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CustomAvatar } from "./CustomAvatar";
import { HomeStyles } from "./HomeStyles";

export function InfoCard(props: {
  user: {
    name: string;
    position: string;
    projectsTaken: number;
    projectsCompleted: number;
  };
}) {
  return (
    <TouchableOpacity style={HomeStyles.userInfoContainer}>
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
          <Text style={{ ...HomeStyles.textPrimary, color: Colors.gray }}>
            {props.user.name}
          </Text>
          <Text style={{ ...HomeStyles.text, color: Colors.gray }}>
            {props.user.position}
          </Text>
        </View>

        <View style={{ ...HomeStyles.icon }}>
          <MaterialIcons name="navigate-next" size={24} color={Colors.white} />
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
    </TouchableOpacity>
  );
}
