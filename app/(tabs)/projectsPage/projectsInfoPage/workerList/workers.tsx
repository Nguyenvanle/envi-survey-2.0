import { container, text } from "@/constants/Styles";

import { listWorkerFireBase } from "@/constants/logic/projectFirebase";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { WorkerList } from "./../../../../../constants/components/home/WorkersList";

export default function listEmployees() {
  const { projectID } = useGlobalSearchParams();

  const { listWorkerMap, isLoading } = listWorkerFireBase(projectID);

  const workers = Array.from(listWorkerMap.entries()).map(
    ([workerUid, workerData]) => ({
      uid: workerUid,
      name: workerData.fullName,
    })
  );
  if (isLoading) return;
  return (
    <ScrollView style={container.scrollView}>
      <SafeAreaProvider style={{ ...container.root, padding: 20 }}>
        {/* listEmployees */}
        <Text
          style={{
            ...text.headerPrimary,
            fontSize: 20,
            alignSelf: "flex-start",
          }}
        >
          Thành Viên
        </Text>
        <WorkerList
          workers={workers.map((worker) => ({ ...worker }))}
        ></WorkerList>
      </SafeAreaProvider>
    </ScrollView>
  );
}
