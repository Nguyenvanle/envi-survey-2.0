import Colors from "@/constants/Colors";
import { getInitials } from "@/constants/logic/getInitials";
import React from "react";
import { Text, View } from "react-native";
import { styles } from './../../TienDatStyles';
import { CustomAvatar } from "./CustomAvatar";

export function WorkerList(props: {
  workers: Array<{
    uid: string;
    name: string;
  }>;
}) {

    const user = {
        name: "N V",
        position: "N V",
        projectsTaken: 10,
        projectsCompleted: 8,
      };
    return props.workers.map((worker, index) => (
        <View
            key={index}
            style={{
              ...styles.userInfoContainer,
              backgroundColor: Colors.blueWhite,
            }}
          >
            <View style={styles.infoContainer}>
              <View
                style={{
                  maxHeight: 47,
                  minHeight: 17,
                  height: "auto",
                }}
              >
                {CustomAvatar(getInitials, user)}
              </View>

              <View style={styles.namePosition}>
                <Text
                  style={{
                    ...styles.textPrimary,
                    color: Colors.gray,
                    fontSize: 14,
                    lineHeight: 18,
                  }}
                >
                  {worker.name}
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    color: Colors.muted,
                    fontSize: 12,
                  }}
                >
                  {worker.uid}
                </Text>
              </View>

            </View>
          </View>
      ));
}