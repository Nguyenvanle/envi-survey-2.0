import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { router } from "expo-router";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

// Đảm bảo firebase đã được khởi tạo ở đâu đó trong ứng dụng của bạn

const nameUserFirebaseUser = (userId: any) => {  
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUserName = async () => {
      if (userId) {
        const userRef = doc(FIREBASE_DB, "users", userId);
        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            setUsername(docSnapshot.data().fullName); // Thay 'username' bằng tên field chứa tên người dùng
          } else {
            console.log("Cannot find user data!");
          }
        } catch (error) {
          console.error("Error getting user data:", error);
        }
        setIsLoading(false); 
      } else {
        console.log(userId);
        setIsLoading(false);
      }
    };

    if (userId) {
      getUserName();
    }
  }, [userId]);

  return {username,isLoading};
};

const useFirebaseUser = (userId: any) => {  
  const [username, setUsername] = useState(null);
  const [userPosition, setUserPosition] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const uid = FIREBASE_AUTH.currentUser?.uid;

  useEffect(() => {
    const getUserData = async () => {
      if (uid) {
        const userRef = doc(FIREBASE_DB, "users", uid);
        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            setUsername(docSnapshot.data().fullName); // Thay 'username' bằng tên field chứa tên người dùng
            setUserPosition(docSnapshot.data().position); // Thay 'username' bằng tên field chứa tên người dùng
          } else {
            console.log("Cannot find user data!");
          }
        } catch (error) {
          console.error("Error getting user data:", error);
        }
        setIsLoading(false);
      } else {
        console.log(uid);
        setIsLoading(false);
      }
    };

    if (userId) {
      getUserData();
    }
  }, [userId]);

  return { username, isLoading, userPosition: userPosition, uid };
};

const useAuthListener = async () => {
  const [user, setUser] = useState<User | null>(null);
  const { username } = useFirebaseUser(user);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user !== null) {
        setUser(user);
        console.log("uid: ", user.uid, " đã đăng nhập - indexRedirect");
        console.log(username);
        if (username !== null) {
          console.log("uid: ", user.uid, " đã điền thông tin - indexRedirect");
          router.replace("/homePage/indexHome");
        } else {
          console.log(
            "uid: ",
            user.uid,
            " chưa điền thông tin - indexRedirect"
          );
          router.replace("/(auth)/setInfoUser");
        }
      } else {
        setUser(user);
        console.log(
          "Chưa đăng nhập, chuyển tới trang đăng nhập - indexRedirect"
        );
        router.replace("/(auth)/signIn");
      }
    });
  }, []);
};

const signIn = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    response;
    // Việc xử lý chuyển hướng sẽ nằm ở AuthScreen sau khi promise được giải quyết
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
const signUp = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    response;
    // Căng cố gắng đảm bảo phản hồi tích cực tới người dùng
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

const useSignOut = async () => {
  await signOut(FIREBASE_AUTH)
    .then(() => {
      // Đăng xuất thành công, chuyển hướng người dùng đến màn hình đăng nhập.
      Alert.alert("Thông báo", "Đăng xuất thành công 🥰", [
        { text: "Ok", onPress: () => console.log("Đăng xuất") },
      ]);
      router.push("/signIn");
    })
    .catch((error) => {
      console.log("Đăng xuất thất bại với mã lỗi: " + error.message);
    });
};

const setInfoUserMethod = async (fullName: any, position: any) => {
  // Validate data and then save to Firebase
  // Navigate to next screen or pop to previous screen if needed
  if (fullName.length === 0 || position.length === 0) {
    // Thông báo lỗi nếu người dùng không nhập đầy đủ thông tin
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  // Lấy UID từ người dùng hiện tại
  const user = FIREBASE_AUTH.currentUser;

  if (user) {
    const uid = user.uid;
    const userData = {
      fullName: fullName,
      position: position,
      // Đặt các trường thông tin khác mà bạn muốn lưu
    };

    const userRef = doc(FIREBASE_DB, "users", uid);

    // Kiểm tra document có tồn tại không
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      try {
        await updateDoc(userRef, userData);
        Alert.alert("Thông Báo", "Cập nhật thông tin thành công 🥰", [
          { text: "Hủy", onPress: () => console.log("Hủy") },
          { text: "Đồng ý", onPress: () => console.log("Đồng ý") },
        ]);
      } catch (error: any) {
        console.error(
          `Lỗi khi cập nhật thông tin người dùng với uid: ${uid}: `,
          error.message
        );
      }
    } else {
      // Nếu userid không tồn tại, thêm người dùng mới

      try {
        await setDoc(doc(FIREBASE_DB, "users", uid), userData);
        Alert.alert(
          "Thông báo",
          "Người dùng " + fullName + " đã được thêm vào hệ thống",
          [
            {
              text: "Đồng ý",
              onPress: () => {
                console.log("setInfoUser Redirect");
                router.replace("/");
              },
            },
          ]
        );
      } catch (error) {
        console.error("Lỗi khi thêm người dùng mới: ", error);
      }
    }
  } else {
    // Thông báo lỗi nếu không tìm thấy người dùng
    alert("Không tìm thấy người dùng. Vui lòng đăng nhập lại.");
  }
  console.log(fullName, position);

  return { fullName, position };
};

export {
  nameUserFirebaseUser, setInfoUserMethod,
  signIn,
  signOut,
  signUp,
  useAuthListener,
  useFirebaseUser,
  useSignOut
};

