import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { container, text, defaultStyles } from "@/constants/Styles";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
// này để xóa cái cảnh báo xaml của vscode :D
// @ts-ignore
import UserAvatar from "react-native-user-avatar";

export default function indexHome() {
  return (
    <ScrollView style={{}}>
      <View style={container.root}>
        {/* Hello Frame */}
        <View style={styles.hello}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hello</Text>
            <Text style={styles.textPrimary}>James</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name="smileo" size={56} color={Colors.teal}></AntDesign>
          </View>
        </View>
        {/* User Info Frame */}
        <View style={styles.userInfoContainer}>
          <View style={styles.infoContainer}>
            <UserAvatar
              size={48}
              name="Avishay Bar"
              bgColors={[Colors.lightGray]}
              style={styles.avatar}
            />

            <View style={styles.namePosition}>
              <Text style={{ ...styles.textPrimary, color: Colors.gray }}>
                James Cameron
              </Text>
              <Text style={{ ...styles.text, color: Colors.gray }}>
                Quản Lý
              </Text>
            </View>

            <View style={styles.icon}>
              <MaterialIcons
                name="navigate-next"
                size={24}
                color={Colors.white}
              />
            </View>
          </View>

          <View style={defaultStyles.separator}></View>

          <View style={styles.projectContainer}>
            <View style={styles.divideContainer}>
              <MaterialCommunityIcons
                name="folder-check-outline"
                size={16}
                color={Colors.gray}
              />

              <Text style={styles.miniText}>12 dự án</Text>
            </View>

            <View style={styles.divideContainer}>
              <MaterialCommunityIcons
                name="folder-check-outline"
                size={16}
                color={Colors.gray}
              />

              <Text style={styles.miniText}>6 dự án</Text>
            </View>
          </View>
        </View>

        <View style={styles.userInfoContainer}>
          <View style={styles.infoContainer}>
            <UserAvatar
              size={48}
              name="Avishay Bar"
              bgColors={[Colors.lightGray]}
              style={styles.avatar}
            />

            <View style={styles.namePosition}>
              <Text style={{ ...styles.textPrimary, color: Colors.gray }}>
                James Cameron
              </Text>
              <Text style={{ ...styles.text, color: Colors.gray }}>
                Quản Lý
              </Text>
            </View>

            <View style={styles.icon}>
              <MaterialIcons
                name="navigate-next"
                size={24}
                color={Colors.white}
              />
            </View>
          </View>

          <View style={defaultStyles.separator}></View>

          <View style={styles.projectContainer}>
            <View style={styles.divideContainer}>
              <MaterialCommunityIcons
                name="folder-check-outline"
                size={16}
                color={Colors.gray}
              />

              <Text style={styles.miniText}>12 dự án</Text>
            </View>

            <View style={styles.divideContainer}>
              <MaterialCommunityIcons
                name="folder-check-outline"
                size={16}
                color={Colors.gray}
              />

              <Text style={styles.miniText}>6 dự án</Text>
            </View>
          </View>
        </View>

        <View style={styles.userInfoContainer}>
          <View style={styles.infoContainer}>
            <UserAvatar
              size={48}
              name="Avishay Bar"
              bgColors={[Colors.lightGray]}
              style={styles.avatar}
            />

            <View style={styles.namePosition}>
              <Text style={{ ...styles.textPrimary, color: Colors.gray }}>
                James Cameron
              </Text>
              <Text style={{ ...styles.text, color: Colors.gray }}>
                Quản Lý
              </Text>
            </View>

            <View style={styles.icon}>
              <MaterialIcons
                name="navigate-next"
                size={24}
                color={Colors.white}
              />
            </View>
          </View>

          <View style={defaultStyles.separator}></View>

          <View style={styles.projectContainer}>
            <View style={styles.divideContainer}>
              <MaterialCommunityIcons
                name="folder-check-outline"
                size={16}
                color={Colors.gray}
              />

              <Text style={styles.miniText}>12 dự án</Text>
            </View>

            <View style={styles.divideContainer}>
              <MaterialCommunityIcons
                name="folder-check-outline"
                size={16}
                color={Colors.gray}
              />

              <Text style={styles.miniText}>6 dự án</Text>
            </View>
          </View>
        </View>

        <View style={styles.userInfoContainer}>
          <View style={styles.infoContainer}>
            <UserAvatar
              size={48}
              name="Avishay Bar"
              bgColors={[Colors.lightGray]}
              style={styles.avatar}
            />

            <View style={styles.namePosition}>
              <Text style={{ ...styles.textPrimary, color: Colors.gray }}>
                James Cameron
              </Text>
              <Text style={{ ...styles.text, color: Colors.gray }}>
                Quản Lý
              </Text>
            </View>

            <View style={styles.icon}>
              <MaterialIcons
                name="navigate-next"
                size={24}
                color={Colors.white}
              />
            </View>
          </View>

          <View style={defaultStyles.separator}></View>

          <View style={styles.projectContainer}>
            <View style={styles.divideContainer}>
              <MaterialCommunityIcons
                name="folder-check-outline"
                size={16}
                color={Colors.gray}
              />

              <Text style={styles.miniText}>12 dự án</Text>
            </View>

            <View style={styles.divideContainer}>
              <MaterialCommunityIcons
                name="folder-check-outline"
                size={16}
                color={Colors.gray}
              />

              <Text style={styles.miniText}>6 dự án</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
  miniText: {
    color: Colors.gray,
    fontSize: 14,
    fontWeight: "400",
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
  infoContainer: {
    flex: 0,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    gap: 12,
  },
  avatar: {},
  namePosition: {
    flex: 0,
    alignItems: "flex-start",
    gap: 8,
  },
  icon: {
    flex: 1,
    alignItems: "flex-end",
  },
  projectContainer: {
    flex: 0,
    alignItems: "flex-start",
    gap: 12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  divideContainer: {
    flex: 1,
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
  },
});
