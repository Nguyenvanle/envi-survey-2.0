import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { router } from "expo-router";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

// Đảm bảo firebase đã được khởi tạo ở đâu đó trong ứng dụng của bạn

const useFirebaseUser = (userId: any) => {
  const [username, setUsername] = useState("");
  const [userPositon, setUserPositon] = useState("");
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
            setUserPositon(docSnapshot.data().position); // Thay 'username' bằng tên field chứa tên người dùng
          } else {
            console.log("Cannot find user data!");
          }
        } catch (error) {
          console.error("Error getting user data:", error);
        }
        setIsLoading(false);
      }
    };

    if (userId) {
      getUserData();
    }
  }, [userId]);

  return { username, isLoading, userPosition: userPositon };
};

const useAuthListener = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user !== null) {
        router.replace("/homePage/indexHome");
        setUser(user);
        console.log("uid: ", user.uid, " đã đăng nhập, chuyển tới trang chủ");
        return;
      } else {
        router.replace("/authScreen");
        setUser(user);
        console.log("uid: null chưa đăng nhập, chuyển tới trang đăng nhập");
        return;
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

const useSignOut = () => {
  signOut(FIREBASE_AUTH)
    .then(() => {
      // Đăng xuất thành công, chuyển hướng người dùng đến màn hình đăng nhập.
      alert("Đăng xuất thành công 🥰");
      router.push("/");
    })
    .catch((error) => {
      console.log("Đăng xuất thất bại với mã lỗi: " + error.message);
    });
};

export {
  signIn,
  signOut,
  signUp,
  useAuthListener,
  useFirebaseUser,
  useSignOut,
};

