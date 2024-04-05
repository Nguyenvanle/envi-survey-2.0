import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router"; // Nếu bạn đang sử dụng Next.js
import { useEffect, useState } from "react";

// Đảm bảo firebase đã được khởi tạo ở đâu đó trong ứng dụng của bạn

const useFirebaseUser = (userId) => {
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
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
          console.error("Error fetching user data:", error);
        }
        setIsLoading(false);
      }
    };

    getUserData();
  }, [userId]);

  return { username, isLoading };
};

const useAuthListener = () => {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Hoặc hãy sử dụng logic điều hướng phù hợp cho router của bạn.

  useEffect(() => {
    // Listener thiso dõi sự thay đổi trạng thái đăng nhập của người dùng
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (firebaseUser) => {
      if (firebaseUser) {
        // Nếu người dùng đã đăng nhập, lưu user vào state và chuyển hướng
        router.replace("/homePage/indexHome");
      } else {
        // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
        router.replace("/authScreen");
      }
      setUser(firebaseUser);
    });

    // Cleanup khi component unmount
    return () => unsubscribe();
  }, [router]);

  return user;
};

export { useAuthListener, useFirebaseUser };
