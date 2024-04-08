import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  hello: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    flex: 0,
    flexDirection: "column",
    padding: 0,
    gap: 6,
    alignItems: "flex-start",
  },
  iconContainer: {
    flex: 0,
  },
  text: {
    ...text.normalNoPadding,
    fontWeight: "400",
    lineHeight: 19,
  },
  miniText: {
    color: Colors.gray,
    fontSize: 14,
    fontWeight: "400",
  },
  textPrimary: {
    ...text.normalNoPadding,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 22,
    color: Colors.primary,
  },
  userInfoContainer: {
    flex: 0,
    padding: 20,
    marginHorizontal: 10,
    flexDirection: "column",
    backgroundColor: Colors.primary,
    gap: 16,
    borderRadius: 12,
    alignSelf: "stretch", // fill-container
  },
  infoContainer: {
    flex: 0,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    gap: 12,
  },
  avatar: {
    flexShrink: 0,
  },
  namePosition: {
    flex: 0,
    alignItems: "flex-start",
    alignSelf: "stretch",
    gap: 8,
  },
  icon: {
    flex: 1,
    alignItems: "flex-end",
    alignSelf: "center",
    alignContent: "stretch",
  },
  projectContainer: {
    flex: 0,
    alignItems: "flex-start",
    gap: 12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  divideContainer: {
    flex: 1,
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
  },
  searchBox: {
    flex: 0,
    alignItems: "flex-start",
    gap: 12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  searchContainer: {
    flex: 0,
    alignItems: "flex-start",
    gap: 12,
    alignSelf: "stretch",
    flexDirection: "row",
    borderRadius: 16,
  },
  namePositionSearch: {
    flex: 1,
    alignItems: "flex-start",
    alignSelf: "stretch",
    gap: 8,
  },
});
