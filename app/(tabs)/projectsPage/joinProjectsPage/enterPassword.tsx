import { button, container, input, text } from "@/constants/Styles";
import useFirebaseUser from "@/constants/logic/useFirebaseUser";
import { Link } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function enterPassword(userId: any) {
  const { username, isLoading } = useFirebaseUser(userId);

  return (
    <View style={container.root}>
      <View style={container.body}>
        <View style={container.header}>
          <Text style={text.header}>Bạn đang tham gia dự án</Text>
          <Text style={text.headerPrimary}>{username}</Text>
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
          <Link href={"./successJoinProject"} asChild>
            <TouchableOpacity style={button.primary}>
              <Text style={button.textPrimary}>Tham gia</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
