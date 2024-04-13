import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { styles } from "@/constants/TienDatStyles";
import { PeriodsList } from "@/constants/components/home/PeriodsList";
import { samplingFirebase } from "@/constants/logic/projectFirebase";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function SamplingPeriod() {
  const { projectID } = useGlobalSearchParams();
  const periodsMap = samplingFirebase(projectID);
  const periods = Array.from(periodsMap.entries()).map(
    ([periodUid, periodData]) => ({
    uid: periodUid,
    name: periodData.name,
    start: periodData.start,
    end: periodData.end,
  }));

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
            <PeriodsList
            periods={periods.map((period) => ({...period}))}
            ></PeriodsList>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
