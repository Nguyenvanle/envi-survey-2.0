import { FIREBASE_DB } from "@/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const initFirebase = (userId: any) => {  
    const [nameProject,setNameProject] = useState("")
    const [myPass, setPass] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const getUserName = async () => {
        if (userId) {
          const userRef = doc(FIREBASE_DB, "projects", userId);
          try {
            const docSnapshot = await getDoc(userRef);
            if (docSnapshot.exists()) {
              setNameProject(docSnapshot.data().name); // Thay 'username' bằng tên field chứa tên người dùng
              setPass(docSnapshot.data().password);
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
  
    return {nameProject,myPass,isLoading};
  };

export { initFirebase };

