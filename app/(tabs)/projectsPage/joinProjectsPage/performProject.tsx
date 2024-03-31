import { WebView } from "react-native-webview";
import { container } from "@/constants/Styles";
import { View } from "react-native";

export default function performProject() {
  return (
    <WebView
      style={container.webview}
      injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.9, maximum-scale=0.9, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
      source={{
        //uri: "https://docs.google.com/forms/u/0/?ftv=1",

        uri: "https://docs.google.com/forms/d/e/1FAIpQLSed23nyZQX3nKtIQp72CFJMRjUK4wuYw8HOGFWrN2No_ylWag/viewform?usp=sf_link",
      }}
    />
  );
}
