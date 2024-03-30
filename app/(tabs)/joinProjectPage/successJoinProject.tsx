import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { Link } from "expo-router";

export default function successJoinProject() {
  return (
    <View style={container.root}>
      <View style={container.body}>
        <View style={container.header}>
          <Text style={text.header}>Bạn đang tham gia dự án</Text>
          <Text style={text.headerPrimary}>"Khảo sát đất khu 91b"</Text>
        </View>
        <View style={container.input}>
          <Text
            style={text.label}
            aria-label="Label for Username"
            nativeID="labelProjectPassword"
          >
            Mật khẩu
          </Text>
          <View style={container.button}>
            <TextInput
              style={input.normal}
              aria-label="input"
              aria-labelledby="labelProjectPassword"
              placeholder="Vui lòng nhập mật khẩu dự án"
            />
          </View>
        </View>
        <View style={container.button}>
          <Link href={"/(tabs)/createPage/successCreateProject"} asChild>
            <TouchableOpacity style={button.primary}>
              <Text style={button.textPrimary}>Tham gia</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
