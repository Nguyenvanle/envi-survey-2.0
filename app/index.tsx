import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import {
  useAuthListener,
  useFirebaseUser,
} from "@/constants/logic/useFirebaseUser";
import { Button, Text } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = (userId: any) => {
  const { username, isLoading } = useFirebaseUser(userId);

  if (isLoading) {
    useAuthListener();

    return (
      <SafeAreaProvider style={container.root}>
        <Button
          title="loading"
          type="clear"
          loading
          loadingProps={{ size: 70, color: Colors.muted }}
        />
        {/* <Button title="Click Me" type="solid" /> */}
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider style={container.root}>
      <Button
        title="Click Me"
        type="solid"
        onPress={() => console.log(username)}
      />
      <Text style={{ color: Colors.white }}>{username}</Text>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default index;
