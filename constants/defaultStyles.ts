import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
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
    height: 2,
    backgroundColor: Colors.lightGray,
    paddingTop: 0,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  avatar: {
    flexShrink: 0,
    width: 30,
    height: 30,
  },
  namePosition: {
    flex: 0,
    alignItems: "flex-start",
    gap: 8,
  },
  textPrimary: {
    ...text.normalNoPadding,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 22,
    color: Colors.primary,
  },
});
