import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { Button } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AuthIndex() {
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
