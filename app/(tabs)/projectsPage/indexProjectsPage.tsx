import React from "react";
import { ScrollView } from "react-native";

import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { PrimaryTitle } from "@/constants/components/home/PrimaryTitle";
import { ProjectsList } from "@/constants/components/home/ProjectsList";
import { projectFirebase } from "@/constants/logic/projectFirebase";
import { useFirebaseUser } from "@/constants/logic/useFirebaseUser";
import { Button } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function indexHome(userId: any) {
  const {
    username,
    isLoading,
    userPosition: userPosition,
  } = useFirebaseUser(userId);

  const projectsMap = projectFirebase(userId);

  if (isLoading) {
    return (
      <SafeAreaProvider style={container.root}>
        <Button
          title="loading"
          type="clear"
          loading
          loadingProps={{ size: 70, color: Colors.muted }}
        />
      </SafeAreaProvider>
    );
  }

  const user = {
    name: username || "undefine",
    position: userPosition || "undefine",
    projectsTaken: 10,
    projectsCompleted: 8,
  };
  // Giả sử bạn có một mảng projects như sau:
  const projects = Array.from(projectsMap.entries()).map(
    ([projectUid, projectData]) => ({
      uid: projectUid,
      name: projectData.name,
      manage: projectData.uidManager,
      startDate: projectData.start,
      endDate: projectData.end,
    })
  );

  return (
    <ScrollView style={container.scrollView}>
      <SafeAreaProvider style={container.root}>
        <PrimaryTitle></PrimaryTitle>

        <ProjectsList
          user={user}
          projects={projects.map((project) => ({ ...project }))}
        ></ProjectsList>
      </SafeAreaProvider>
    </ScrollView>
  );
}
