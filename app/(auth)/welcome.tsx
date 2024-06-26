import Colors from "@/constants/Colors";
import { container } from "@/constants/Styles";
import ButtonFillContainer from "@/constants/components/create/ButtonFillContainer";
import { Image, ImageBackground, Text, View } from "react-native";

export default function WelcomeScreen() {
  const backgroundImage = require("@/assets/images/background.jpg");
  const image = require("@/assets/images/illustration.png");
  const logoLogin = require("@/assets/images/logoLogin.png");
  return (
    <ImageBackground source={backgroundImage} style={container.background}>
      <View style={container.rootNoColor}>
        <View style={container.Center}>
          <Image
            source={logoLogin}
            style={{ maxWidth: 300, maxHeight: 125 }}
          ></Image>
          <Image source={image} style={container.image} />
          <ButtonFillContainer
            link={"/signIn"}
            onPress={null}
            color={Colors.background}
            title={<Text style={{ padding: 5 }}>Tham gia</Text>}
          ></ButtonFillContainer>
        </View>
      </View>
    </ImageBackground>
  );
}
