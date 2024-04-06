import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import React from "react";
import { ScrollView, View } from "react-native";

import { HelloBar } from "@/constants/components/home/HelloBar";
import { HomeStyles } from "@/constants/components/home/HomeStyles";
import { InfoCard } from "@/constants/components/home/InfoCard";
import { PrimaryTitle } from "@/constants/components/home/PrimaryTitle";
import { ProjectsList } from "@/constants/components/home/ProjectsList";
import SearchLinkButton from "@/constants/components/home/SearchLinkButton";
import { useFirebaseUser } from "@/constants/logic/useFirebaseUser";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function indexHome(userId: any) {
  const {
    username,
    isLoading,
    userPosition: userPosition,
  } = useFirebaseUser(userId);

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

  return (
    <ScrollView style={container.scrollView}>
      <SafeAreaProvider style={container.root}>
        <HelloBar name={user.name.toString()}></HelloBar>

        <InfoCard user={user}></InfoCard>

        <SearchLinkButton
          link={"/(tabs)/searchPage/indexSearchPage"}
          replace={true}
        ></SearchLinkButton>

        <PrimaryTitle></PrimaryTitle>

        <ProjectsList user={user}></ProjectsList>
      </SafeAreaProvider>
    </ScrollView>
  );

  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.gray }}>
      <ScrollView style={container.scrollView}>
        <View style={container.root}>
          {/* Hello Frame */}
          {/* <View style={styles.hello}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Hello</Text>
              <Text style={styles.textPrimary}>{username}</Text>
            </View>
            <View style={styles.iconContainer}>
              <AntDesign
                name="smileo"
                size={56}
                color={Colors.teal}
              ></AntDesign>
            </View>
          </View> */}
          {/* User Info Frame */}
          {/* <View style={styles.userInfoContainer}>
            <View style={styles.infoContainer}>
              <UserAvatar
                size={48}
                name="Avishay Bar"
                bgColors={[Colors.lightGray]}
                style={styles.avatar}
              />

              <View style={styles.namePosition}>
                <Text style={{ ...styles.textPrimary, color: Colors.gray }}>
                  James Cameron
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

            <View style={defaultStyles.separator}></View>

            <View style={styles.projectContainer}>
              <View style={styles.divideContainer}>
                <MaterialCommunityIcons
                  name="folder-check-outline"
                  size={16}
                  color={Colors.gray}
                />

                <Text style={styles.miniText}>12 dự án</Text>
              </View>

              <View style={styles.divideContainer}>
                <MaterialCommunityIcons
                  name="folder-check-outline"
                  size={16}
                  color={Colors.gray}
                />

                <Text style={styles.miniText}>6 dự án</Text>
              </View>
            </View>
          </View> */}
          {/* Search Button Link Box */}
          {/* <View style={styles.searchBox}>
            <View style={container.button}>
              <Link href={"/(tabs)/searchPage/indexSearchPage"} asChild>
                <TouchableOpacity
                  style={{ ...button.light, alignContent: "flex-start" }}
                >
                  <Octicons name="search" size={24} color={Colors.gray} />
                  <Text
                    style={{
                      ...button.textLight,
                      fontWeight: "700",
                      color: Colors.lightGray,
                    }}
                  >
                    Tìm Kiếm dự án
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View> */}
          {/* My Projects List Title */}
          {/* <View style={{ ...styles.hello, padding: 0 }}>
            <View style={styles.textContainer}>
              <Text style={styles.textPrimary}>Dự án của tôi</Text>
            </View>
          </View> */}
          {/* My Projects List Items */}
          <View
            style={{
              ...HomeStyles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={HomeStyles.infoContainer}>
              {/* <UserAvatar
                size={48}
                name="James Cameron"
                bgColors={[Colors.lightGray]}
                style={HomeStyles.avatar}
              /> */}

              <View style={HomeStyles.namePosition}>
                <Text
                  style={{
                    ...HomeStyles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  Khảo sát đất Ninh Kiều
                </Text>

                <Text
                  style={{
                    ...HomeStyles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  James Cameron
                </Text>
              </View>

              <View
                style={{
                  ...HomeStyles.icon,
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <SimpleLineIcons name="chart" size={20} color={Colors.muted} />
                <Text
                  style={{
                    ...HomeStyles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  80.5%
                </Text>
              </View>
            </View>

            {/* <View style={{ ...defaultStyles.separator }}></View> */}

            {/* <View style={HomeStyles.projectContainer}>
              <View style={HomeStyles.divideContainer}>
                <Feather name="clock" size={16} color={Colors.success} />

                <Text style={{ ...HomeStyles.miniText, color: Colors.success }}>
                  19/03/2024
                </Text>
              </View>

              <View style={HomeStyles.divideContainer}>
                <Feather name="clock" size={16} color={Colors.red} />

                <Text style={{ ...HomeStyles.miniText, color: Colors.red }}>
                  19/03/2024
                </Text>
              </View>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

