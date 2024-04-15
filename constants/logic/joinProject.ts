import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
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
  
    return {nameProject, myPass, isLoading};
  };

  const addUser = async (projectID: any) => {
    // Lấy thông tin người dùng hiện tại
    const uid = FIREBASE_AUTH.currentUser?.uid;
    
    // Kiểm tra xem người dùng hiện tại có tồn tại hay không
    if (projectID) {
      try {
        const projectRef = doc(FIREBASE_DB, "projects", projectID);
        const projectSnapshot = await getDoc(projectRef);
        if (projectSnapshot.exists()) {
          const projectData = projectSnapshot.data();
          if (!projectData.uidMembers.includes(uid)) {
            const newUidMembers = [...projectData.uidMembers,uid];
            alert("Tham gia dự án thành công!");
            await updateDoc(projectRef, { uidMembers: newUidMembers });
          } else {alert("Bạn đã là thành viên trong dự án")};
        } else {
          console.error("Project does not exist.");
        }
      } catch (error) {
        console.error("Error adding user to project:", error);
      }
    } else {
      console.error("No current user.");
    }
  };
export { addUser, initFirebase };

