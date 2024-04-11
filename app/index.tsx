import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { useFirebaseUser } from "@/constants/logic/useFirebaseUser";
import { Button } from "@rneui/base";
import { Redirect } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = (userId: any) => {
  const { isLoading, uid, username } = useFirebaseUser(userId);

  if (isLoading) {
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

  if (uid === undefined) {
    console.log("index -> welcome");
    return <Redirect href={"/(auth)/welcome"} />;
  } else if (username !== null) {
    console.log("index -> home");
    return <Redirect href={"/(tabs)/homePage/indexHome"} />;
  } else {
    console.log("index -> setInfoUser");
    return <Redirect href={"/(auth)/setInfoUser"} />;
  }
};

export default index;
