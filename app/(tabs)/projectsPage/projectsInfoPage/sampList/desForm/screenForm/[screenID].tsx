import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import { getLinkFirebaseUser } from "@/constants/logic/projectFirebase";
import { Button } from "@rneui/base";
import { useGlobalSearchParams } from "expo-router";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function formScreen() {

  const { projectID } = useGlobalSearchParams();
  const [initialLoading, setInitialLoading] = useState(true);
  
  const {
    link,
    isLoadingGetLink,
} = getLinkFirebaseUser(projectID);
    console.log(link);
    
    if(isLoadingGetLink) return;
    return (
      <SafeAreaProvider style={{ backgroundColor: "white" }}>
        {initialLoading && (
          <Button
            title="loading"
            type="clear"
            loading
            loadingProps={{ size: 70, color: Colors.gray }}
            buttonStyle={{ paddingTop: "70%" }}
          />
        )}
        <WebView
          style={[container.webview, initialLoading ? { display: "none" } : {}]} // Ẩn WebView khi đang tải
          source={{ uri: link }}
          onLoad={() => setInitialLoading(false)} // Tắt loading sau khi tải xong lần đầu
          injectedJavaScript={`
            const meta = document.createElement('meta');
            meta.setAttribute('content', 'width=device-width, initial-scale=0.9, maximum-scale=0.9, user-scalable=0');
            meta.setAttribute('name', 'viewport');
            document.getElementsByTagName('head')[0].appendChild(meta);
          `}
        />
      </SafeAreaProvider>
    );
  }