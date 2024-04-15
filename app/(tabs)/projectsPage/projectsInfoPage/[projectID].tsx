import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { styles } from "@/constants/TienDatStyles";
import {
  detailsProjectFirebase,
  getRemainingDays,
} from "@/constants/logic/projectFirebase";
import { nameUserFirebaseUser } from "@/constants/logic/useFirebaseUser";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/base";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"; //press world "rnf" to create form quickly

export default function IndexProjectInformation() {
  const { projectID } = useLocalSearchParams();
  const { name, start, end, uidManager, question, isLoadingDetail } =
    detailsProjectFirebase(projectID);

  const { remaining, isLoading } = getRemainingDays(end);

  const { username } = nameUserFirebaseUser(uidManager);
  if (isLoading || isLoadingDetail) return;
  return (
    <ScrollView style={container.scrollView}>
      <View style={{ ...container.root }}>
        <View style={styles.body}>
          <View style={styles.subFrame}>
            <Text
              style={StyleSheet.compose(styles.subTittle, {
                color: Colors.white,
                fontWeight: "400",
              })}
            >
              Thông tin chính
            </Text>

            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.MainShape
              )}
            >
              <View style={styles.aboveInfor}>
                <Text style={styles.mainText}>{name}</Text>

                <Text style={{ ...styles.text }}>
                  <Text>Id: </Text>
                  {projectID}
                </Text>
              </View>
              <View
                style={StyleSheet.compose(
                  styles.vector,
                  styles.colorMainVector
                )}
              ></View>
            </View>
          </View>

          <View style={styles.subFrame}>
            <Text style={styles.subTittle}>Thời gian thực hiện</Text>
            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.WhiteShape
              )}
            >
              <View style={styles.aboveInfor}>
                <View style={styles.subItem}>
                  <View style={styles.itemComponnent}>
                    <Image
                      source={require("@/assets/images/green-clock.png")}
                      style={styles.smallIcon}
                    ></Image>
                    <Text
                      style={StyleSheet.compose(styles.itemText, {
                        color: Colors.primary,
                      })}
                    >
                      {" "}
                      {start}
                    </Text>
                  </View>

                  <View style={styles.itemComponnent}>
                    <Image
                      source={require("@/assets/images/red-clock.png")}
                      style={styles.smallIcon}
                    ></Image>
                    <Text
                      style={StyleSheet.compose(styles.itemText, {
                        color: Colors.red,
                      })}
                    >
                      {" "}
                      {end}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

              <View style={[styles.itemComponnent, { width: "auto" }]}>
                <Image
                  source={require("@/assets/images/blue-clock.png")}
                  style={styles.smallIcon}
                ></Image>
                <Text
                  style={StyleSheet.compose(styles.itemText, {
                    color: Colors.deepBlue,
                  })}
                >
                  {remaining}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.subFrame}>
            <Text style={styles.subTittle}>Nhân sự đảm nhiệm</Text>
            <View style={styles.userInfoContainer}>
              <View style={styles.infoContainer}>
                <Avatar
                  rounded
                  size={60}
                  title="AB"
                  overlayContainerStyle={{ backgroundColor: "gray" }}
                />

                <View style={styles.namePosition}>
                  <Text style={{ ...styles.textPrimary, color: Colors.gray }}>
                    {username}
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
            </View>

            <TouchableOpacity
              style={{
                flex: 0,
                backgroundColor: Colors.blueWhite,
                borderRadius: 10,
              }}
              onPress={() => {
                router.navigate(
                  `/(tabs)/projectsPage/projectsInfoPage/workerList/workers`
                );
              }}
            >
              <View style={styles.itemComponnent}>
                <Text
                  style={StyleSheet.compose(styles.mainText, {
                    fontSize: 16,
                    marginVertical: 7,
                    flex: 1,
                    paddingHorizontal: 18,
                    justifyContent: "center",
                    alignItems: "center",
                    lineHeight: 36,
                    alignSelf: "stretch",
                    color: Colors.primary,
                  })}
                >
                  Xem thành viên
                </Text>
                <AntDesign
                  name="right"
                  size={24}
                  color={Colors.primary}
                  style={{ paddingRight: 10 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ ...styles.subFrame, gap: 20 }}>
            <View
              style={{
                ...styles.RectangleShape,
                ...styles.WhiteShape,
              }}
            >
              <View style={styles.aboveInfor}>
                <View style={styles.itemComponnent}>
                  <Text
                    style={StyleSheet.compose(styles.titleDescription, {
                      color: Colors.gray,
                      textAlign: "left",
                      flex: 1,
                    })}
                  >
                    Mô tả dự án
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

              <View style={styles.aboveInfor}>
                <View style={styles.itemComponnent}>
                  <Text
                    style={{
                      ...styles.contentDescription,
                      textAlign: "left",
                      flex: 1,
                    }}
                  >
                    {question}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.subFrame}>
            <TouchableOpacity
              style={{
                flex: 0,
                backgroundColor: Colors.blueWhite,
                borderRadius: 10,
              }}
              onPress={() => {
                router.navigate(
                  `/projectsPage/projectsInfoPage/sampList/${projectID}`
                );
              }}
            >
              <View style={styles.itemComponnent}>
                <Text
                  style={StyleSheet.compose(styles.mainText, {
                    fontSize: 16,
                    marginVertical: 7,
                    flex: 1,
                    paddingHorizontal: 18,
                    justifyContent: "center",
                    alignItems: "center",
                    lineHeight: 36,
                    alignSelf: "stretch",
                    color: Colors.primary,
                  })}
                >
                  Xem chi tiết
                </Text>
                <AntDesign
                  name="right"
                  size={24}
                  color={Colors.primary}
                  style={{ paddingRight: 10 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
