import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  block: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 14,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  // == Dai phan cach == //
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.lightGray,
    marginLeft: 50,
  },
});

export const description = StyleSheet.create({
  default: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    height: 24,
  },
  bold: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  primary: {
    textAlign: "center",
    color: Colors.primary,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  headline: {
    color: Colors.success,
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
    minHeight: 32,
  },
});

export const container = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 4,
    paddingBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
  webview: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 0,
    padding: 30,
    backgroundColor: Colors.blueWhite,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    height: 300,
    borderRadius: 26,
  },
});

export const text = StyleSheet.create({
  normal: {
    fontSize: 16,
    color: Colors.white,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export const button = StyleSheet.create({
  primary: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },
  light: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
  textPrimary: {
    ...text.normal,
    color: Colors.white,
  },
  textLight: {
    ...text.normal,
    color: Colors.gray,
  },
});
