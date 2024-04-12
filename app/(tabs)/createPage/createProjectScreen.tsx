import { container } from "@/constants/Styles";
import { WebView } from "react-native-webview";

export default function createProjectScreen() {
  return (
    <WebView
      style={container.webview}
      injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.9, maximum-scale=0.9, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
      source={{
        // link tạo form mới bằng tk gg đã đăng nhập trên ứng dụng
        uri: "https://docs.google.com/forms",

        //uri: "https://docs.google.com/forms/d/1MY38RVNT0qq_LLyq0DykBmYyV_6378HPaMPdAxntizI",
      }}
    />
  );
}
