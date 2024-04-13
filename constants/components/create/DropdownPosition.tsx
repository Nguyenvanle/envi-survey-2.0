import Colors from "@/constants/Colors";
import { CheckBox, Dialog } from "@rneui/themed";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { button, container } from "../../Styles";

const PositionDropdown = ({ onPositionChange }: any) => {
  const positions = ["Quản Lý", "Nhân Viên"]; // Mảng chứa tên địa điểm
  const [checked, setChecked] = useState(0);
  const [position, setPosition] = useState(positions[checked]); // Khởi tạo ban đầu với địa điểm đầu tiên trong mảng
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const onCheck = (index: any) => {
    setChecked(index);
    setPosition(positions[index]);
    if (onPositionChange) {
      onPositionChange(positions[index]);
    }
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
          {position}
        </Text>
      </TouchableOpacity>
      <Dialog
        overlayStyle={{ borderRadius: 16, backgroundColor: Colors.lightGray }}
        isVisible={visible}
        onBackdropPress={toggleDialog}
      >
        <Dialog.Title
          titleStyle={{ color: Colors.primary }}
          title="Chọn chức vụ"
        />
        {positions.map((loc, i) => (
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
            onPress={() => onCheck(i)}
          />
        ))}
        <Dialog.Actions>
          <Dialog.Button
            titleStyle={{ color: Colors.primary }}
            title="Chọn"
            onPress={() => {
              console.log(`Option ${position} was selected!`); // Log giá trị theo tên địa điểm
              toggleDialog();
            }}
          />
          <Dialog.Button
            titleStyle={{ color: Colors.primary }}
            title="Thoát"
            onPress={toggleDialog}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default PositionDropdown;
