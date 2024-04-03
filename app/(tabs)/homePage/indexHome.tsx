import Colors from "@/constants/Colors";
import { button, container, defaultStyles, text } from "@/constants/Styles";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// Cái này để xóa cái cảnh báo xaml của vscode :D
// @ts-ignore
import { Link } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserAvatar from "react-native-user-avatar";

export default function indexHome() {
  return (
    <SafeAreaProvider>
      <ScrollView style={container.scrollView}>
        <View style={container.root}>
          {/* Hello Frame */}
          <View style={styles.hello}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Hello</Text>
              <Text style={styles.textPrimary}>James</Text>
            </View>
            <View style={styles.iconContainer}>
              <AntDesign
                name="smileo"
                size={56}
                color={Colors.teal}
              ></AntDesign>
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
          {/* Search Button Link Box */}
          <View style={styles.searchBox}>
            <View style={container.button}>
              <Link href={"/(tabs)/searchPage/indexSearchPage"} asChild>
                <TouchableOpacity
                  style={{ ...button.light, alignContent: "flex-start" }}
                >
                  <Octicons name="search" size={24} color={Colors.gray} />
                  <Text
                    style={{
                      ...button.textLight,
                      fontWeight: "700",
                      color: Colors.lightGray,
                    }}
                  >
                    Tìm Kiếm dự án
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
          {/* My Projects List Title */}
          <View style={{ ...styles.hello, padding: 0 }}>
            <View style={styles.textContainer}>
              <Text style={styles.textPrimary}>Dự án của tôi</Text>
            </View>
          </View>
          {/* My Projects List Items */}
          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <UserAvatar
                size={48}
                name="James Cameron"
                bgColors={[Colors.lightGray]}
                style={styles.avatar}
              />

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Khảo sát đất Ninh Kiều
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  James Cameron
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <SimpleLineIcons name="chart" size={20} color={Colors.muted} />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  80.5%
                </Text>
              </View>
            </View>

            <View style={{ ...defaultStyles.separator }}></View>

            <View style={styles.projectContainer}>
              <View style={styles.divideContainer}>
                <Feather name="clock" size={16} color={Colors.success} />

                <Text style={{ ...styles.miniText, color: Colors.success }}>
                  19/03/2024
                </Text>
              </View>

              <View style={styles.divideContainer}>
                <Feather name="clock" size={16} color={Colors.red} />

                <Text style={{ ...styles.miniText, color: Colors.red }}>
                  19/03/2024
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <UserAvatar
                size={48}
                name="James Cameron"
                bgColors={[Colors.lightGray]}
                style={styles.avatar}
              />

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Khảo sát đất Ninh Kiều
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  James Cameron
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <SimpleLineIcons name="chart" size={20} color={Colors.muted} />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  80.5%
                </Text>
              </View>
            </View>

            <View style={{ ...defaultStyles.separator }}></View>

            <View style={styles.projectContainer}>
              <View style={styles.divideContainer}>
                <Feather name="clock" size={16} color={Colors.success} />

                <Text style={{ ...styles.miniText, color: Colors.success }}>
                  19/03/2024
                </Text>
              </View>

              <View style={styles.divideContainer}>
                <Feather name="clock" size={16} color={Colors.red} />

                <Text style={{ ...styles.miniText, color: Colors.red }}>
                  19/03/2024
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <UserAvatar
                size={48}
                name="James Cameron"
                bgColors={[Colors.lightGray]}
                style={styles.avatar}
              />

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Khảo sát đất Ninh Kiều
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  James Cameron
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <SimpleLineIcons name="chart" size={20} color={Colors.muted} />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  80.5%
                </Text>
              </View>
            </View>

            <View style={{ ...defaultStyles.separator }}></View>

            <View style={styles.projectContainer}>
              <View style={styles.divideContainer}>
                <Feather name="clock" size={16} color={Colors.success} />

                <Text style={{ ...styles.miniText, color: Colors.success }}>
                  19/03/2024
                </Text>
              </View>

              <View style={styles.divideContainer}>
                <Feather name="clock" size={16} color={Colors.red} />

                <Text style={{ ...styles.miniText, color: Colors.red }}>
                  19/03/2024
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
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
  avatar: {
    flexShrink: 0,
  },
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
  searchBox: {
    flex: 0,
    alignItems: "flex-start",
    gap: 12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  searchContainer: {
    flex: 0,
    alignItems: "flex-start",
    gap: 12,
    alignSelf: "stretch",
    flexDirection: "row",
    borderRadius: 16,
  },
});
