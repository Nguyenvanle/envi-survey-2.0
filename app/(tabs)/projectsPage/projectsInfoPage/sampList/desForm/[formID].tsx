import { container } from "@/constants/Styles";
import { styles } from "@/constants/TienDatStyles";
import { FormsList } from "@/constants/components/home/FormsList";
import { LinkFormFirebaseUser, namePeriodFirebaseUser, nameProjectFirebaseUser } from "@/constants/logic/projectFirebase";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function samplingPeriod() {
  const {projectID} = useGlobalSearchParams();
  const {formID} = useGlobalSearchParams();
  
  const {//lay ten va Ma cua DA
    projectName,
    isLoading,
  } = nameProjectFirebaseUser(projectID);

  const {//lay ten va ma cua Period
    periodName,
    isLoadingPeriod,
  } = namePeriodFirebaseUser(formID);

  const {
    linkFormMap,
    isLoadingMap,
  } = LinkFormFirebaseUser(formID);

  const linkforms = Array.from(linkFormMap.entries()).map(
    ([linkFormUid, linkFormData]) => ({
      uid: linkFormUid,
      name: linkFormData.name,
      status: linkFormData.status,
    })
  )
  if(isLoading || isLoadingPeriod) return;
  return (
    <ScrollView style={container.scrollView}>
      <View style={{ ...styles.container, paddingBottom: 60, paddingTop: 0 }}>
        <View style={StyleSheet.compose(styles.body, { gap: 10 })}>
          <View style={{ ...styles.subFrame, paddingHorizontal: 30 }}>
            <View
              style={StyleSheet.compose(
                styles.RectangleShape,
                styles.MainShape
              )}
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
              <Text
                style={StyleSheet.compose(styles.mainText, {
                  alignSelf: "center",
                })}
              >
                {periodName}
              </Text>
            </View>
          </View>
          <View style={{ ...styles.subFrame, gap: 20, paddingHorizontal: 20 }}>
            <Text style={styles.subTittle}>Chi tiết biểu mẫu</Text>
            <FormsList
              forms={linkforms.map((link) => ({ ...link }))}
            ></FormsList>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
