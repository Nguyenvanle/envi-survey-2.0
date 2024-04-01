import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { Button } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaProvider style={container.root}>
      <Button
        title="loading"
        type="clear"
        loading
        loadingProps={{ size: 70, color: Colors.muted }}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
