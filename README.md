    Ứng dụng lấy mẫu khảo sát Envi-Survey

Hướng dẫn mở dự án:
0. Mở folder muốn tải dự án vể bằng terminal
1. Clone dự án về bằng lệnh git clone
2. Chạy lệnh npm install để cài đặt node-module
3. Chạy lệnh npx expo start
4. Nhấn S trên bàn phím để chuyển sang Expo Go Mode
5. Quét QR trên điện thoạt để kiểm tra xem ứng dụng có chạy bình thường không
6. Nếu bình thường thì hãy tắt server bằng Ctrl+C
7. Chạy lệnh code . trên terminal
8. Mở từng file xem phần nào báo đỏ thì tải thư viện đó về
9. Sau khi hết báo đỏ chạy lại  npx expo start để xem bình thường chưa
10. Nếu chạy thành công thì chúc mừng, bạn đã có thể tiếp tục code cùng tôi :)))


Một số thuật ngữ Github:
1. git init: tạo một dự án git(repository)
2. git clone: tạo repository từ trên mạng về
3. git pull: đồng bộ code từ trên Mạng về Máy
4. git push: đồng bộ code từ trên Máy lên Mạng
5. git commit: tạo một chỉnh sửa mới lên mạng
6. fetch origin: đồng code từ máy lên mạng 


Một số lệnh thông dụng:
1. npx kill-port 8081 : xóa cổng
2. npm update : cài đặt lại những thư viện cần thiết (chạy khi pull code về máy)
3. npm start: chạy dự án (ngắn hơn lệnh expo một chút)
4. justifyContent: canh theo chiều ngang
5. alignItems: canh theo chiều dọc
6. alignSelf: áp dụng thuộc tính căn chỉnh cho một phần tử con đơn lẻ, bất chấp thuộc tính alignItems của flex container. 


Cách lấy thông tin user bằng firebase:
Lưu ý: Cách trao đổi dữ liệu của RN (react-native) khác với các ngôn ngữ khác, muốn truyền dữ liệu qua các components ta bắt buộc phải sử dụng hook hoặc services. Ở đây chúng ta sẽ tiến hành đơn giản bằng cách thiết lập một custom hook phục vụ cho việc lấy dữ liệu. Xem chi tiết hàm ở @/constant/logic/useFirebaseUser.ts . Ở đây chúng ta chỉ cần biết cách sử dụng nó ở các components khác là được.
1. Import custom hook useFirebaseUser của chúng ta vào trang cần chạy

import useFirebaseUser from "@/constants/logic/useFirebaseUser"

2. Gọi hook và truyền tham số vào trang hiện tại (ở ví dụ này chúng ta sẽ lấu username của tài khoản thông qua userid được cấp bởi firebase)

export default function indexHome(userId: any) {
  const { username, isLoading } = useFirebaseUser(userId);
    // khai báo tương tự với useState, một hàm trả về username hàm còn lại trả về isLoading(true or false) thể hiển là đang chờ dữ liệu từ firebase
  ...
  return (...)
}

3.  Gọi hàm username đã khai báo để sử dụng ở nơi cần thiết. Ở đây cụ thể là hiện thị tên người dùng.

export default function indexHome(userId: any) {
  const { username, isLoading } = useFirebaseUser(userId);
  ...
  return (
    ...
    <.Text style={styles.textPrimary}>{username}</.Text>
    ...
  )
}

