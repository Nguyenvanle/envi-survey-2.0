import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { container, text, defaultStyles } from "@/constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
// này để xóa cái cảnh báo xaml của vscode :D
// @ts-ignore
import UserAvatar from "react-native-user-avatar";

export default function indexHome() {
  return (
    <View style={container.root}>
      <View style={styles.hello}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello</Text>
          <Text style={styles.textPrimary}>James</Text>
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name="smileo" size={56} color={Colors.teal}></AntDesign>
        </View>
      </View>
      <View style={styles.userInfoContainer}>
        <View style={styles.infoContainer}>
          <UserAvatar
            size={42}
            name="Avishay Bar"
            bgColors={[Colors.lightGray]}
          />
        </View>
        <View style={styles.line}></View>
        <View style={styles.projectContainer}>
          <Text>project</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hello: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    flex: 0,
    flexDirection: "column",
    padding: 0,
    gap: 6,
    alignItems: "flex-start",
  },
  iconContainer: {
    flex: 0,
  },
  text: {
    ...text.normalNoPadding,
    fontWeight: "400",
    lineHeight: 19,
  },
  textPrimary: {
    ...text.normalNoPadding,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 22,
    color: Colors.primary,
  },
  userInfoContainer: {
    flex: 0,
    padding: 20,
    flexDirection: "column",
    backgroundColor: Colors.primary,
    gap: 16,
    borderRadius: 12,
    alignSelf: "stretch", // fill-container
  },
  infoContainer: {},
  line: {
    ...defaultStyles.separator,
  },
  projectContainer: {},
});
