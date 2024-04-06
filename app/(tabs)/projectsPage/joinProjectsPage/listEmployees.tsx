import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { styles } from "@/constants/TienDatStyles";
import { CustomAvatar } from "@/constants/components/home/CustomAvatar";

import { getInitials } from "@/constants/logic/getInitials";
import FontAwesome5 from "@expo/vector-icons/build/FontAwesome5";
import Octicons from "@expo/vector-icons/build/Octicons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function listEmployees(props: {
  user: {
    name: string;
    position: string;
    projectsTaken: number;
    projectsCompleted: number;
  };
}) {
  return (
    <SafeAreaProvider>
      <ScrollView>
        {/* listEmployees */}
        <View style={{ ...container.root, gap: 15 }}>
          {/* Employee 1*/}
          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <View
                style={{
                  maxHeight: 47,
                  minHeight: 17,
                  height: "auto",
                }}
              >
                {CustomAvatar(getInitials, props.user)}
              </View>

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Nguyen Hung Thinh
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  B2103518
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Octicons
                  name="mortar-board"
                  size={24}
                  color={Colors.yellowManager}
                />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.yellowManager,
                    fontSize: 12,
                    paddingTop: 25,
                  }}
                >
                  Manager
                </Text>
              </View>
            </View>
          </View>
          {/* end */}
          {/* Employee 2*/}
          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <View
                style={{
                  maxHeight: 47,
                  minHeight: 17,
                  height: "auto",
                }}
              >
                {CustomAvatar(getInitials, props.user)}
              </View>

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Nguyen Hung Thinh
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  B2103518
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <FontAwesome5 name="user" size={24} color={Colors.blueMember} />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.blueMember,
                    fontSize: 12,
                    paddingTop: 25,
                  }}
                >
                  Member
                </Text>
              </View>
            </View>
          </View>
          {/* end */}
          {/* Employee 3*/}
          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <View
                style={{
                  maxHeight: 47,
                  minHeight: 17,
                  height: "auto",
                }}
              >
                {CustomAvatar(getInitials, props.user)}
              </View>

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Nguyen Hung Thinh
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  B2103518
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <FontAwesome5 name="user" size={24} color={Colors.blueMember} />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.blueMember,
                    fontSize: 12,
                    paddingTop: 25,
                  }}
                >
                  Member
                </Text>
              </View>
            </View>
          </View>
          {/* end */}
          {/* Employee 4*/}
          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <View
                style={{
                  maxHeight: 47,
                  minHeight: 17,
                  height: "auto",
                }}
              >
                {CustomAvatar(getInitials, props.user)}
              </View>

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Nguyen Hung Thinh
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  B2103518
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <FontAwesome5 name="user" size={24} color={Colors.blueMember} />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.blueMember,
                    fontSize: 12,
                    paddingTop: 25,
                  }}
                >
                  Member
                </Text>
              </View>
            </View>
          </View>
          {/* end */}
          {/* Employee 5*/}
          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <View
                style={{
                  maxHeight: 47,
                  minHeight: 17,
                  height: "auto",
                }}
              >
                {CustomAvatar(getInitials, props.user)}
              </View>

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Nguyen Hung Thinh
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  B2103518
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <FontAwesome5 name="user" size={24} color={Colors.blueMember} />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.blueMember,
                    fontSize: 12,
                    paddingTop: 25,
                  }}
                >
                  Member
                </Text>
              </View>
            </View>
          </View>
          {/* end */}
          {/* Employee 6*/}
          <View
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <View
                style={{
                  maxHeight: 47,
                  minHeight: 17,
                  height: "auto",
                }}
              >
                {CustomAvatar(getInitials, props.user)}
              </View>

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Nguyen Hung Thinh
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  B2103518
                </Text>
              </View>

              <View
                style={{
                  ...styles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <FontAwesome5 name="user" size={24} color={Colors.blueMember} />
                <Text
                  style={{
                    ...styles.text,
                    color: Colors.blueMember,
                    fontSize: 12,
                    paddingTop: 25,
                  }}
                >
                  Member
                </Text>
              </View>
            </View>
          </View>
          {/* end */}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
