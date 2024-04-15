import { container, text } from "@/constants/Styles";

import Colors from "@/constants/Colors";
import { listWorkerFireBase } from "@/constants/logic/projectFirebase";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { WorkerList } from './../../../../../constants/components/home/WorkersList';

export default function listEmployees() {
  const {projectID} = useGlobalSearchParams();

  const {
    listWorkerMap,
    isLoading,
  } = listWorkerFireBase(projectID);
  
  const workers = Array.from(listWorkerMap.entries()).map(
    ([workerUid, workerData]) => ({
      uid: workerUid,
      name: workerData.fullName,
    })
  );
  if(isLoading) return;
  return (
    <SafeAreaProvider  style={ container.root}>
      <ScrollView>
        {/* listEmployees */}
        <View style={{ ...container.root, gap: 15 , alignItems: "flex-start", backgroundColor: Colors.background}}>
<Text style={{...text.headerPrimary, fontSize: 20}}>Thành Viên</Text>
        <WorkerList
                workers = {workers.map((worker) => ({ ...worker}))}
              ></WorkerList>

        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
