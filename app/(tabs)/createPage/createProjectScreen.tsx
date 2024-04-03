import { WebView } from "react-native-webview";
import { container } from "@/constants/Styles";
import { View } from "react-native";

export default function createProjectScreen() {
  return (
    <WebView
      style={container.webview}
      injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.9, maximum-scale=0.9, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
      source={{
        //uri: "https://docs.google.com/forms/u/0/?ftv=1",

        uri: "https://docs.google.com/forms/d/1MY38RVNT0qq_LLyq0DykBmYyV_6378HPaMPdAxntizI/edit#responses",
      }}
    />
  );
}
