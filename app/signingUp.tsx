import { FIREBASE_AUTH } from "@/FirebaseConfig";
import Colors from "@/constants/Colors";
import { button, container, input, text } from "@/constants/Styles";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

class Person {
  fullName: string;
  position: string;

  constructor(fullName: string, position: string) {
    this.fullName = fullName;
    this.position = position;
  }
  toString() {
    return this.fullName + ", " + this.position;
  }
}

export default function signingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error: any) {
      alert("Sign up failed: " + error.message);
      router.replace("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ ...container.root, paddingBottom: 0 }}>
      <View style={{ ...container.rootNoColor }}>
        <Text style={{ ...text.headerPrimary, fontSize: 24 }}>
          Đăng Ký Tài Khoản
        </Text>

        <View style={container.Center}>
          <View style={{ ...container.input }}>
            <Text style={{ ...text.label }}>Email</Text>
            <View style={container.button}>
              <TextInput
                style={input.normal}
                textContentType="emailAddress"
                value={email}
                placeholder="Nhập email"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={{ ...container.input }}>
            <Text style={text.label}>Mật khẩu</Text>
            <View style={container.button}>
              <TextInput
                style={input.normal}
                secureTextEntry={true}
                value={password}
                textContentType="password"
                placeholder="Nhập mật khẩu"
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
          {/* Confirm Password Input */}
          <View style={container.input}>
            <Text style={text.label}>Nhập lại mật khẩu:</Text>
            <View style={container.button}>
              <TextInput
                style={{ ...input.normal }}
                placeholder="Nhập lại mật khẩu"
                onChangeText={() => {}}
                autoCapitalize="none"
                secureTextEntry={true}
                textContentType="password"
              />
            </View>
          </View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <>
            <View style={container.button}>
              {/* 'replace' to remove back button */}
              <TouchableOpacity style={button.light} onPress={signUp}>
                <Text style={button.textLight}>Đăng Ký</Text>
                {/* opPress={signUp}*/}
              </TouchableOpacity>
              {/* 'replace' to remove back button */}
            </View>
          </>
        )}
      </View>
    </View>
  );
}

//   return (
//     <ScrollView style={{ ...container.scrollView, paddingHorizontal: 10 }}>
//       <SafeAreaProvider style={container.root}>
//         {/* Title */}
//         <Text style={{ ...text.headerPrimary, paddingTop: 50 }}>Đăng Ký</Text>
//         {/* Email Input */}
//         <View style={{ ...container.input }}>
//           <Text style={{ ...text.label }}>Email</Text>
//           <View style={container.button}>
//             <TextInput
//               style={input.normal}
//               textContentType="emailAddress"
//               placeholder="Nhập email "
//               autoCapitalize="none"
//             />
//           </View>
//         </View>
//         {/* Password Input */}
//         <View style={{ ...container.input }}>
//           <Text style={text.label}>Mật khẩu</Text>
//           <View style={container.button}>
//             <TextInput
//               style={input.normal}
//               secureTextEntry={true}
//               textContentType="password"
//               placeholder="Nhập mật khẩu "
//               autoCapitalize="none"
//             />
//           </View>
//         </View>
//         {/* Confirm Password Input */}
//         <View style={container.input}>
//           <Text style={text.label}>Nhập lại mật khẩu:</Text>
//           <View style={container.button}>
//             <TextInput
//               style={{ ...input.normal }}
//               placeholder="Nhập lại mật khẩu"
//               onChangeText={() => {}}
//             />
//           </View>
//         </View>
//         {/* Select Position Input */}
//         <View style={{ ...container.input, paddingBottom: 10 }}>
//           <Text style={text.label}>Chọn chức vụ:</Text>
//           <View style={{ ...container.button }}>
//             <PositionDropdown />
//           </View>
//         </View>
//         {/* them tam mot xoa */}
//         <View style={container.input}>
//           <Text style={text.label}>Chức vụ:</Text>
//           <View style={container.button}>
//             <TextInput
//               style={input.normal}
//               placeholder="Chọn chức vụ của bạn"
//             />
//           </View>
//         </View>
//         {/* Birth Day Input */}
//         <View style={container.input}>
//           <Text style={text.label}>Ngày Sinh:</Text>
//           <View style={container.button}>
//             <MyTimePicker />
//           </View>
//         </View>

//         {/* Submit Info */}
//         {/* Create a button container */}
//         <View style={container.button}>
//           <Link href={"/authScreen"} asChild>
//             {/* 'replace' to remove back button */}
//             <TouchableOpacity
//               style={{ ...button.primary, backgroundColor: Colors.red }}
//             >
//               <Text style={button.textLight}>Hủy</Text>
//             </TouchableOpacity>
//           </Link>

//           {/* 'replace' to remove back button */}
//           {/*  */}

//           <>
//             <TouchableOpacity style={button.primary}>
//               <Text style={button.textPrimary}>Xác Nhận</Text>
//             </TouchableOpacity>
//           </>
//         </View>

//         <ButtonSignOut color={"red"}></ButtonSignOut>
//       </SafeAreaProvider>
//     </ScrollView>
//   );
