import { button, container } from "@/constants/Styles";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonFillContainer(props: {
  link: string | any;
  onpress: string | any;
  color: string | any;
  title: string | any;
}) {
  if (props.color !== null)
    return (
      <View style={container.button}>
        <Link href={props.link} replace asChild>
          <TouchableOpacity
            style={{ ...button.primary, backgroundColor: props.color }}
          >
            <Text style={button.textPrimary}>{props.title}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  else if (props.onpress !== null) {
    return (
      <View style={container.button}>
        <Link href={props.link} asChild>
          <TouchableOpacity
            style={{ ...button.primary }}
            onPress={props.onpress}
          >
            <Text style={button.textPrimary}>{props.title}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  }
}
