import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import React from "react";
import { ScrollView } from "react-native";

import { HelloBar } from "@/constants/components/home/HelloBar";
import { InfoCard } from "@/constants/components/home/InfoCard";
import { PrimaryTitle } from "@/constants/components/home/PrimaryTitle";
import { ProjectsList } from "@/constants/components/home/ProjectsList";
import SearchLinkButton from "@/constants/components/home/SearchLinkButton";
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
  const projects = Array.from(projectsMap.values()).map(projects =>({//projects la ten trong CSDL
    name: projects.name,
    manage: projects.uidManager,
    startDate: projects.start,
    endDate: projects.end,
  }))


  return (
    <ScrollView style={container.scrollView}>
      <SafeAreaProvider style={{ ...container.root }}>
        <HelloBar name={user.name.toString()}></HelloBar>
        <InfoCard user={user}></InfoCard>
        <SearchLinkButton
          link={"/(tabs)/searchPage/SearchPage"}
          replace={true}
        ></SearchLinkButton>
        <PrimaryTitle></PrimaryTitle>
        {/* Trong phần render của bạn, bạn có thể sử dụng map() như sau: */}
        <ProjectsList
          user={user}
          projects={projects.map((project) => ({ ...project }))}
        ></ProjectsList>
      </SafeAreaProvider>
    </ScrollView>
  );
}
