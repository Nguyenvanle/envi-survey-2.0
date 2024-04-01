import { container } from "@/constants/Styles";
<<<<<<<< HEAD:app/(tabs)/searchPage/searchPage.tsx
import { Link } from "expo-router";

export default function searchPage() {
  const openLink = () => {};
  
  return(
  <View style={container.root}></View>
  )
========
import React from "react";
import { View } from "react-native";

export default function indexSearchPage() {
  return <View style={container.root}></View>;
>>>>>>>> master:app/(tabs)/searchPage/indexSearchPage.tsx
}
