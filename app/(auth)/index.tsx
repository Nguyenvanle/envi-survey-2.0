import { container } from "@/constants/Styles";
import Loading from "@/constants/components/auth/Loading";
import { Redirect } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AuthIndex() {
  return (
    <SafeAreaProvider style={container.root}>
      <Loading />
      <Redirect href={"/(auth)/welcome"} />
    </SafeAreaProvider>
  );
}
