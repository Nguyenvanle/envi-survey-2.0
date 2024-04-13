import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { getInitials } from "@/constants/logic/getInitials";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CustomAvatar } from "./CustomAvatar";
import { HomeStyles } from "./HomeStyles";

export function PeriodsList(props: {
  periods: Array<{
    uid: string;
    name: string;
    start: string;
    end: string;
  }>;
}) {

    const user = {
        name: "P S",
        position: "P S",
        projectsTaken: 10,
        projectsCompleted: 8,
      };
    return props.periods.map((period, index) => (
        <TouchableOpacity
          key={index} // Sử dụng index làm key, tuy nhiên trong thực tế nên sử dụng giá trị duy nhất từ dữ liệu (ví dụ: project.id)
          style={{
            ...HomeStyles.userInfoContainer,
            backgroundColor: Colors.blueWhite,
          }}
          onPress={() => {
            router.replace(`/(tabs)/projectsPage/projectsInfoPage/sampList/${period.uid}`);
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
              {CustomAvatar(getInitials,user)}
            </View>
    
            <View style={{ ...HomeStyles.namePosition, flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  ...HomeStyles.textPrimary,
                  color: Colors.gray,
                  fontSize: 18,
                  lineHeight: 18,
                }}
              >
                {period.name}{" "}
                {/* Update từ props.projects.name sang project.name */}
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
                {period.start}{" "}
                {/* Update từ props.projects.startDate sang project.startDate */}
              </Text>
            </View>
    
            <View style={HomeStyles.divideContainer}>
              <Feather name="clock" size={16} color={Colors.red} />
              <Text style={{ ...HomeStyles.miniText, color: Colors.red }}>
                {period.end}{" "}
                {/* Update từ props.projects.endDate sang project.endDate */}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ));
}