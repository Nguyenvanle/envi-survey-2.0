import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { styles } from "@/constants/TienDatStyles";
import { PeriodsList } from "@/constants/components/home/PeriodsList";
import {
  nameProjectFirebaseUser,
  samplingFirebase,
} from "@/constants/logic/projectFirebase";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SamplingPeriod() {
  const { projectID } = useGlobalSearchParams();

  const { samplingsMap, isLoadingSampling } = samplingFirebase(projectID);

  const periods = Array.from(samplingsMap.entries()).map(
    ([periodUid, periodData]) => ({
      uid: periodUid,
      name: periodData.name,
      start: periodData.start,
      end: periodData.end,
    })
  );

  const { projectName, isLoading } = nameProjectFirebaseUser(projectID);

  if (isLoading || isLoadingSampling) return;
  return (
    <ScrollView style={container.scrollView}>
      <SafeAreaProvider style={{ ...container.root, paddingTop: 0 }}>
        <View
          style={{
            ...styles.container,
            paddingBottom: 60,
            paddingTop: 0,
          }}
        >
          <View
            style={{
              ...styles.body,
              gap: 10,
              backgroundColor: "red",
              padding: 0,
            }}
          >
            <View
              style={{
                ...styles.subFrame,
                paddingHorizontal: 30,
                backgroundColor: "blue",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={StyleSheet.compose(styles.subTittle, {
                  color: Colors.white,
                  fontWeight: "400",
                })}
              >
                Thông tin chính
              </Text>
              <View
                style={{
                  ...styles.RectangleShape,
                  ...styles.MainShape,
                  paddingHorizontal: 14,
                }}
              >
                <View style={styles.aboveInfor}>
                  <Text style={styles.mainText}>{projectName}</Text>
                  <Text style={styles.text}>Id: {projectID}</Text>
                </View>
                <View
                  style={StyleSheet.compose(
                    styles.vector,
                    styles.colorMainVector
                  )}
                ></View>
              </View>
            </View>

            <View
              style={{ ...styles.subFrame, gap: 20, paddingHorizontal: 20 }}
            >
              <Text style={{ ...styles.subTittle, paddingHorizontal: 10 }}>
                Buổi lấy mẫu:{" "}
              </Text>
              <PeriodsList
                periods={periods.map((period) => ({ ...period }))}
              ></PeriodsList>
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    </ScrollView>
  );
}
