import Colors from "@/constants/Colors";
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
    height: 32,
  },
});
