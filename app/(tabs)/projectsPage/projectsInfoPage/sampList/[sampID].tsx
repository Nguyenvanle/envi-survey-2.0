import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { styles } from "@/constants/TienDatStyles";
import { Link, useGlobalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SamplingPeriod() {
  const { projectID } = useGlobalSearchParams();
  console.log(projectID);
  return (
    <ScrollView style={container.scrollView}>
      <View style={{ ...styles.container, paddingBottom: 60 }}>
        <View style={StyleSheet.compose(styles.body, { gap: 10 })}>
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
                <Text style={styles.mainText}>
                  Khảo sát đất đô thị khu vực 91B
                </Text>
                <Text style={styles.text}>Mã dự án #456431</Text>
              </View>
              <View
                style={StyleSheet.compose(
                  styles.vector,
                  styles.colorMainVector
                )}
              ></View>
            </View>
          </View>

          <View style={StyleSheet.compose(styles.subFrame, { gap: 20 })}>
            <Text style={styles.subTittle}>Chi tiết mẫu</Text>

            <Link
              href={`/projectsPage/projectsInfoPage/sampList/desForm/${projectID}`}
              asChild
            >
              <TouchableOpacity>
                <View
                  style={StyleSheet.compose(
                    styles.RectangleShape,
                    styles.WhiteShape
                  )}
                >
                  <View style={styles.aboveInfor}>
                    <Text style={styles.destinationText}>Đợt 1 - 001</Text>
                  </View>
                  <View
                    style={StyleSheet.compose(
                      styles.vector,
                      styles.colorVector
                    )}
                  ></View>

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
                          Start: 19/03/2024
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
                          Start: 25/04/2024
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>

            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.WhiteShape
              )}
            >
              <View style={styles.aboveInfor}>
                <Text style={styles.destinationText}>Đợt 2 - 002</Text>
              </View>
              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

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
                      Start: 19/03/2024
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
                      Start: 25/04/2024
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.WhiteShape
              )}
            >
              <View style={styles.aboveInfor}>
                <Text style={styles.destinationText}>Đợt 3 - 003</Text>
              </View>
              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

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
                      Start: 19/03/2024
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
                      Start: 25/04/2024
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.WhiteShape
              )}
            >
              <View style={styles.aboveInfor}>
                <Text style={styles.destinationText}>Đợt 4 - 004</Text>
              </View>
              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

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
                      Start: 19/03/2024
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
                      Start: 25/04/2024
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.WhiteShape
              )}
            >
              <View style={styles.aboveInfor}>
                <Text style={styles.destinationText}>Đợt 5 - 005</Text>
              </View>
              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

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
                      Start: 19/03/2024
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
                      Start: 25/04/2024
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
