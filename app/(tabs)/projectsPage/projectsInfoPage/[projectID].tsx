import Colors from "@/constants/Colors";
import { button, container } from "@/constants/Styles";
import { styles } from "@/constants/TienDatStyles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/base";
import { Link, useLocalSearchParams } from "expo-router";
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
  console.log(projectID);
  return (
    <ScrollView style={container.scrollView}>
      <View style={styles.container}>
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
                <Text style={styles.mainText}>
                  Khảo sát đất đô thị khu vực 91B
                </Text>

                <Text style={{ ...styles.text, color: Colors.white }}>
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
                  Còn 1 tháng 7 ngày 24' 12' 45'
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.subFrame}>
            <Text style={styles.subTittle}>Tiến độ dự án</Text>
            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.WhiteShape
              )}
            >
              <View style={styles.aboveInfor}>
                <View style={styles.itemComponnent}>
                  <Image
                    source={require("@/assets/images/green-paper.png")}
                    style={styles.smallIcon}
                  ></Image>
                  <Text
                    style={StyleSheet.compose(styles.itemText, {
                      color: Colors.primary,
                    })}
                  >
                    Tổng biểu mẫu hoàn thành: 40/160
                  </Text>
                </View>
              </View>

              <View style={styles.aboveInfor}>
                <View style={styles.itemComponnent}>
                  <Image
                    source={require("@/assets/images/red-paper.png")}
                    style={styles.smallIcon}
                  ></Image>
                  <Text
                    style={StyleSheet.compose(styles.itemText, {
                      color: Colors.red,
                    })}
                  >
                    Số lượng biểu mẫu còn lại: 120
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

              <View style={[styles.itemComponnent, { width: "auto" }]}>
                <Image
                  source={require("@/assets/images/progress.png")}
                  style={styles.smallIcon}
                ></Image>
                <Text
                  style={StyleSheet.compose(styles.itemText, {
                    color: Colors.gray,
                  })}
                >
                  Tiến độ: 25.0%
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
                    Nguyễn Văn Lẹ
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

            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.linkShape
              )}
            >
              <View style={styles.itemComponnent}>
                <Text
                  style={StyleSheet.compose(styles.mainText, {
                    fontSize: 16,
                    marginVertical: 7,
                  })}
                >
                  Các thành viên khác
                </Text>

                <View
                  style={StyleSheet.compose(styles.SmallRectangleShape, {
                    backgroundColor: Colors.primary,
                  })}
                >
                  <Link
                    href={"/(tabs)/projectsPage/joinProjectsPage/listEmployees"}
                    asChild
                  >
                    <TouchableOpacity style={button.primary}>
                      <View style={styles.itemComponnent}>
                        <Text
                          style={StyleSheet.compose(styles.text, {
                            color: Colors.white,
                          })}
                        >
                          Tiếp tục
                        </Text>
                        <AntDesign
                          name="right"
                          size={24}
                          color="white"
                          style={styles.MediumIcon}
                        />
                      </View>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            </View>
          </View>

          <View style={{ ...styles.subFrame, gap: 20 }}>
            <Text style={styles.subTittle}>Mô tả dự án</Text>

            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.WhiteShape
              )}
            >
              <View style={styles.aboveInfor}>
                <View style={styles.itemComponnent}>
                  <Text
                    style={StyleSheet.compose(styles.titleDescription, {
                      color: Colors.primary,
                    })}
                  >
                    Đơn vị tài trợ
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

              <View style={styles.aboveInfor}>
                <View style={styles.itemComponnent}>
                  <Text
                    style={StyleSheet.compose(styles.titleDescription, {
                      color: Colors.gray,
                    })}
                  >
                    Viện Nghiên Cứu Khảo Sát NZIN
                  </Text>
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
                <View style={styles.itemComponnent}>
                  <Text
                    style={StyleSheet.compose(styles.titleDescription, {
                      color: Colors.success,
                    })}
                  >
                    Nhiệm Vụ
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

              <View style={styles.aboveInfor}>
                <View style={styles.itemComponnent}>
                  <Text style={styles.contentDescription}>
                    Thu thập mẫu đất canh tác và đất phù sa, phân tích mối liên
                    hệ giữa đa dạng sinh học của đất và sự biến đổi khí hậu.
                  </Text>
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
                <View style={styles.itemComponnent}>
                  <Text
                    style={StyleSheet.compose(styles.titleDescription, {
                      color: Colors.red,
                    })}
                  >
                    Mục Tiêu
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.compose(styles.vector, styles.colorVector)}
              ></View>

              <View style={styles.aboveInfor}>
                <View style={styles.itemComponnent}>
                  <Text style={styles.contentDescription}>
                    Xác định tác động của biến đổi khí hậu đối với đa dạng sinh
                    học của đất trong khu vực 91B.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={StyleSheet.compose(styles.subFrame, { paddingVertical: 30 })}
          >
            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.linkShape
              )}
            >
              <View style={styles.itemComponnent}>
                <Text
                  style={StyleSheet.compose(styles.mainText, {
                    fontSize: 20,
                    marginVertical: 7,
                  })}
                >
                  Thông Tin Chi Tiết
                </Text>

                <View
                  style={StyleSheet.compose(styles.SmallRectangleShape, {
                    backgroundColor: Colors.primary,
                  })}
                >
                  <Link
                    href={`/projectsPage/projectsInfoPage/sampList/${projectID}`}
                    asChild
                  >
                    <TouchableOpacity style={button.primary}>
                      <View style={styles.itemComponnent}>
                        <Text
                          style={StyleSheet.compose(styles.text, {
                            color: Colors.white,
                          })}
                        >
                          Tiếp tục
                        </Text>
                        <AntDesign
                          name="right"
                          size={24}
                          color="white"
                          style={styles.MediumIcon}
                        />
                      </View>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}