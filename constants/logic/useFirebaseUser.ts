import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

// Đảm bảo firebase đã được khởi tạo ở đâu đó trong ứng dụng của bạn

const useFirebaseUser = (userId: any) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
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

  return { username, isLoading };
};

export default useFirebaseUser;
