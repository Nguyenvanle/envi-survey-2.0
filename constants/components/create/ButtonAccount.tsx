import Colors from "@/constants/Colors";
import { button, container } from "@/constants/Styles";
import { HomeStyles } from "@/constants/components/home/HomeStyles";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonAccount(props: {
  link: string | any;
  onpress: string | any;
  icon: string | any;
  title: string | any;
}) {
  if (props.link !== null) {
    return (
      <>
        <View style={{ ...HomeStyles.searchBox, paddingHorizontal: 10 }}>
          <View style={{ ...container.button, justifyContent: "flex-start" }}>
            <Link href={props.link} asChild>
              <TouchableOpacity
                style={{
                  ...button.light,
                  justifyContent: "flex-start",
                  paddingLeft: 20,
                }}
              >
                {props.icon}
                <Text
                  style={{
                    ...button.textLight,
                    fontWeight: "700",
                    color: Colors.lightGray,
                  }}
                >
                  {props.title}
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={{ ...HomeStyles.searchBox, paddingHorizontal: 10 }}>
          <View style={{ ...container.button, justifyContent: "flex-start" }}>
            <TouchableOpacity
              style={{
                ...button.light,
                justifyContent: "flex-start",
                paddingLeft: 20,
              }}
              onPress={props.onpress}
            >
              {props.icon}
              <Text
                style={{
                  ...button.textLight,
                  fontWeight: "700",
                  color: Colors.lightGray,
                }}
              >
                {props.title}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
