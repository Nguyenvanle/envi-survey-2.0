import Colors from "@/constants/Colors";
import { CheckBox, Dialog } from "@rneui/themed";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { button, container } from "./../../Styles";

const CustomDropdown = () => {
  const locations = ["Quận Cờ Đỏ", "Quận Ninh Kiều", "Khu 91B"]; // Mảng chứa tên địa điểm
  const [checked, setChecked] = useState(0);
  const [destination, setDestination] = useState(locations[checked]); // Khởi tạo ban đầu với địa điểm đầu tiên trong mảng
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <View style={container.button}>
      <TouchableOpacity
        style={{ ...button.light, justifyContent: "flex-start" }}
        onPress={toggleDialog}
      >
        <Text
          style={{
            ...button.textLight,
            paddingLeft: 10,
            color: Colors.selector,
            fontWeight: "400",
            fontSize: 14,
          }}
        >
          {destination}
        </Text>
      </TouchableOpacity>
      <Dialog
        overlayStyle={{ borderRadius: 16, backgroundColor: Colors.lightGray }}
        isVisible={visible}
        onBackdropPress={toggleDialog}
      >
        <Dialog.Title
          titleStyle={{ color: Colors.primary }}
          title="Chọn địa điểm cần khảo sát"
        />
        {locations.map((loc, i) => (
          <CheckBox
            key={i}
            title={loc}
            textStyle={{ color: Colors.white }}
            containerStyle={{
              backgroundColor: Colors.lightGray,
              borderWidth: 0,
              paddingLeft: 0,
            }}
            checkedIcon="dot-circle-o"
            checkedColor={Colors.primary}
            uncheckedIcon="circle-o"
            checked={checked === i}
            onPress={() => {
              setChecked(i);
              setDestination(locations[i]); // Cập nhật địa điểm đã chọn
            }}
          />
        ))}
        <Dialog.Actions>
          <Dialog.Button
            titleStyle={{ color: Colors.primary }}
            title="Save"
            onPress={() => {
              console.log(`Option ${destination} was selected!`); // Log giá trị theo tên địa điểm
              toggleDialog();
            }}
          />
          <Dialog.Button
            titleStyle={{ color: Colors.primary }}
            title="Cancel"
            onPress={toggleDialog}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default CustomDropdown;
