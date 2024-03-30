import { Text, TextInput, View } from "react-native";
import {
  button,
  container,
  description,
  input,
  text,
} from "@/constants/Styles";
import { useState } from "react";
import { FIREBASE_AUTH } from "@/FirebaseConfig";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const auth = FIREBASE_AUTH;

  return (
    <View style={container.root}>
      {/* <View style={container.box}>
        <View style={container.text}>
          <Text style={description.headline}>Dang nhap thanh cong</Text>
          <Text>Ma quan li cua ban la</Text>
          <Text>QL2110082</Text>
        </View>
        <View style={container.button}>
          <Link href={"/(tabs)/homePage/indexHome"} replace asChild>
            <TouchableOpacity style={button.primary}>
              <Text style={button.textPrimary}>Xong</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View> */}
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
    </View>
  );
}
