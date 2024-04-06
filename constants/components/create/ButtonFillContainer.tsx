import { button, container } from "@/constants/Styles";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonFillContainer(props: {
  link: string | any;
  replace: boolean;
  color: string | any;
}) {
  if (props.replace)
    return (
      <View style={container.button}>
        <Link href={props.link} replace asChild>
          <TouchableOpacity
            style={{ ...button.primary, backgroundColor: props.color }}
          >
            <Text style={button.textPrimary}>Xong</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  else
    return (
      <View style={container.button}>
        <Link href={props.link} asChild>
          <TouchableOpacity
            style={{ ...button.primary, backgroundColor: props.color }}
          >
            <Text style={button.textPrimary}>Xong</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
}
