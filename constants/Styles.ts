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
  button: {
    padding: 10,
    borderRadius: 5,
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
    padding: 10,
    paddingBottom: 60,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.background,
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
  header: {
    alignItems: "center",
    gap: 10,
  },
  body: {
    flex: 1,
    padding: 16,
    paddingTop: 5,
    alignItems: "center",
    gap: 20,
  },
  input: {
    justifyContent: "center",
  },
  bodyCenter: {
    flex: 1,
    padding: 16,
    paddingTop: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  boxSuccess: {
    flex: 0,
    padding: 10,
    backgroundColor: Colors.blueWhite,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    height: 300,
    borderRadius: 26,
  },
  Center: {
    alignItems: "center",
    justifyContent: "center",
  },
  CenterGap: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  boxFilter: {
    backgroundColor: Colors.filterback,
    gap: 10,
    padding: 5,
    marginBottom: 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    height: 601,
    borderRadius: 26,
    width: "100%",
  },
  TypeFilter: {
    marginTop: 20,
    flex: 0,
    padding: 1,
    gap: 10,
  },
  selectsContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  select: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.selector,
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  selected: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    gap: 20,
    padding: 10,
    borderRadius: 10,
  },
  headerFilter: {
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },
  selectsContainerButton: {
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  selectClear: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.selector,
    gap: 20,
    padding: 20,
    borderRadius: 10,
  },
  selectedApply: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    gap: 20,
    padding: 20,
    borderRadius: 10,
    paddingLeft: 140,
    paddingRight: 140,
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
  normalNoPadding: {
    fontSize: 16,
    color: Colors.white,
    fontStyle: "normal",
  },
  header: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: "700",
  },
  headerPrimary: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: "700",
  },
  label: {
    fontSize: 16,
    color: Colors.white,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 25,
    fontStyle: "normal",
    fontWeight: "700",
  },
  success: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontStyle: "normal",
    color: Colors.success,
  },
  headerFilter: {
    fontSize: 25,
    color: Colors.white,
    fontWeight: "700",
  },
  select: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: Colors.white,
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
  success: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.success,
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
  ChooseFilter: {},
});
export const input = StyleSheet.create({
  normal: {
    height: 50,
    padding: 10,
    backgroundColor: Colors.white,
    width: "100%",
    borderRadius: 10,
    gap: 10,
  },
});
