import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

const MyTimePicker = () => {
  // State để quản lý giá trị ngày/giờ được chọn
  const [time, setTime] = useState(new Date());

  // Hàm được gọi khi có sự thay đổi giá trị
  const onChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  return (
    <DateTimePicker
      value={time}
      display="calendar" // Có thể chọn 'spinner', 'default', 'clock', 'calendar' tùy vào platform
      onChange={onChange}
    />
  );
};

export default MyTimePicker;
