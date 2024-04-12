import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const projectFirebase = (userId: any) => {
    const [projectsMap, setProjectsMap] = useState(new Map());
    const uid = FIREBASE_AUTH.currentUser?.uid;

    useEffect(() => {
        const getProject = async () => {
            if(uid) {
        const projectsRef = collection(FIREBASE_DB, "projects");
        // Query tất cả các dự án mà user là uid người dùng hiện tại
         const q = await query(projectsRef, where("uidManager", "==", uid));//uid Manager là tên trường trong csdl Projects
         // Lưu tất cả các dự án được trả về từ query vào Map
         const newProjectsMap = new Map();
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
         newProjectsMap.set(doc.id, doc.data());
            });
            setProjectsMap(newProjectsMap);
            }
        };
        getProject();
    },[uid]);
    return projectsMap;
}
export { projectFirebase };

