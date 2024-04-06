import { container } from "@/constants/Styles";
import { Image, ImageBackground, View } from "react-native";

export default function login() {
  const backgroundImage = require("../assets/images/background.jpg");
  const image = require("../assets/images/illustration.png");
  const logoLogin = require("../assets/images/logoLogin.png");
  return (
    <ImageBackground source={backgroundImage} style={container.background}>
      <View style={container.rootNoColor}>
        <View style={container.Center}>
          <Image
            source={logoLogin}
            style={{ maxWidth: 300, maxHeight: 125 }}
          ></Image>
          <Image source={image} style={container.image} />
        </View>
      </View>
    </ImageBackground>
  );
}
