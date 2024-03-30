import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "@/constants/Colors";
import { button, container, description } from "@/constants/Styles";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      {/* Create a header image */}
      <Image
        source={require("@/assets/images/illustration.png")}
        style={styles.welcome}
      ></Image>
      {/* Create a description container */}
      <View style={styles.textContainer}>
        <Text style={description.headline}>Tạo dự án thành công</Text>
        <Text style={description.default}>
          Chúc mừng bạn đã khởi tạo thành công dự án
        </Text>
        <Text style={description.bold}>Khảo sát đất Bình Thủy</Text>
        <Text style={description.primary} onPress={openLink}>
          Bạn muốn làm gì tiếp theo?
        </Text>
      </View>
      {/* Create a button container */}
      <View style={styles.buttonContainer}>
        <Link href={"/projectInformation"} asChild>
          {/* 'replace' to remove back button */}
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonTextPrimary}>Cấu hình dự án</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/createProjectScreen"} asChild>
          {/* 'replace' to remove back button */}
          <TouchableOpacity style={styles.buttonLight}>
            <Text style={styles.buttonTextLight}>Chia sẻ dự án</Text>
          </TouchableOpacity>
        </Link>
    <View style={container.root}>
      <View style={container.box}>
        <View style={container.text}>
          <Text style={description.headline}>Dang nhap thanh cong</Text>
          <Text>Ma quan li cua ban la</Text>
          <Text>QL2110082</Text>
        </View>
        <View style={container.button}>
          <Link href={"/(tabs)/homePage/indexHome"} replace asChild>
            <TouchableOpacity style={button.primary}>
              <Text style={button.textPrimary}>Xong</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
