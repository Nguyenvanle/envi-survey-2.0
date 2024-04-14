import Colors from "@/constants/Colors";
import { button, container } from "@/constants/Styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MyTimePicker = ({ onDateChange }: any) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    // Định dạng ngày thành chuỗi
    const dateString = currentDate.toLocaleDateString("vi-VN"); // ví dụ sử dụng định dạng ngày của Việt Nam
    // Gửi dữ liệu dưới dạng chuỗi về component cha
    console.log(dateString);
    onDateChange(dateString);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
      <View style={container.button}>
        <TouchableOpacity
          style={{
            ...button.light,
            justifyContent: "flex-start",
          }}
          onPress={showDatepicker}
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
            {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default MyTimePicker;
