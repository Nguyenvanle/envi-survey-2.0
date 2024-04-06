import { button, container } from "@/constants/Styles";
import { useSignOut } from "@/constants/logic/useFirebaseUser";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function ButtonSignOut(props: { color: string | any }) {
  return (
    <View style={container.button}>
      {/* <Link href={"/"} replace asChild> */}
      <TouchableOpacity
        style={{ ...button.primary, backgroundColor: props.color }}
        onPress={useSignOut}
      >
        <Text style={button.textPrimary}>Đăng Xuất</Text>
      </TouchableOpacity>
      {/* </Link> */}
    </View>
  );
}
