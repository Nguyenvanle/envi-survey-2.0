import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
export default function successJoinProject() {
  return (
    <View style={container.root}>
      <View style={container.bodyCenter}>
        <View style={container.boxSuccess}>
          <View style={container.CenterGap}>
            <AntDesign name="checkcircle" size={64} color="#00B57F" />
            <Text style={text.success}>Thành công</Text>
            <View style={container.Center}>
              <Text>Chúc mừng bạn tham gia vào dự án</Text>
              <Text>"Khảo sát đất khu 91b"</Text>
            </View>
            <View style={container.button}>
              <Link href={"./performProject"} asChild>
                <TouchableOpacity style={button.success}>
                  <Text style={button.textPrimary}>Tham gia</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
