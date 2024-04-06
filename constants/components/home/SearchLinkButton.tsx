import Colors from "@/constants/Colors";
import { button, container } from "@/constants/Styles";
import { Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeStyles } from "./HomeStyles";

export default function SearchLinkButton(props: {
  link: string | any;
  replace: boolean;
}) {
  if (props.replace)
    return (
      <>
        <View style={{ ...HomeStyles.searchBox, paddingHorizontal: 10 }}>
          <View style={container.button}>
            <Link href={props.link} asChild>
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
        </View>
      </>
    );
  else
    return (
      <>
        <View style={{ ...HomeStyles.searchBox, paddingHorizontal: 10 }}>
          <View style={container.button}>
            <Link href={props.link} replace asChild>
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
        </View>
      </>
    );
}
