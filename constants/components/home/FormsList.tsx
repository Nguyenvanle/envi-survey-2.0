import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { getInitials } from "@/constants/logic/getInitials";
import { Feather } from "@expo/vector-icons";
import { router, useGlobalSearchParams } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CustomAvatar } from "./CustomAvatar";
import { HomeStyles } from "./HomeStyles";

export function FormsList(props: {
  forms: Array<{
    uid: string;
    name: string;
    status: string;
  }>;
}) {
    const user = {
        name: "F O",
        position: "F O",
        projectsTaken: 10,
        projectsCompleted: 8,
      };

      const {projectID } = useGlobalSearchParams();

    function completed(status: any) {
 
        if(status == false) return " Chưa thực hiện";
        else return " Đã hoàn thành";
    }

    return props.forms.map((form, index) => (
        <TouchableOpacity
      key={index} // Sử dụng index làm key, tuy nhiên trong thực tế nên sử dụng giá trị duy nhất từ dữ liệu (ví dụ: project.id)
      style={{
        ...HomeStyles.userInfoContainer,
        backgroundColor: Colors.blueWhite,
      }}
      onPress={() => {
        router.replace(`/(tabs)/projectsPage/projectsInfoPage/sampList/desForm/screenForm/${projectID}`);
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

        <View style={{ ...HomeStyles.namePosition, flex: 1 }}>
          <Text
            style={{
              ...HomeStyles.textPrimary,
              color: Colors.gray,
              fontSize: 16,
              lineHeight: 18,
            }}
          >
            {form.name}{" "}
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
            {form.uid}
          </Text>
        </View>
        {/* ... */}
      </View>

      <View style={defaultStyles.separator}></View>

      <View style={HomeStyles.projectContainer}>
        {/* ... */}
        <View style={HomeStyles.divideContainer}>
          <Feather name="clock" size={16} color={Colors.deepBlue} />
          <Text style={{ ...HomeStyles.miniText, color: Colors.deepBlue }}>Tình trạng: 
            {completed(form.status)}{" "}
            {/* Update từ props.projects.startDate sang project.startDate */}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
      ));
}