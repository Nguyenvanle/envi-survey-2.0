import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const projectFirebase = (userId: any) => {
  const [projectsMap, setProjectsMap] = useState(new Map());
  const uid = FIREBASE_AUTH.currentUser?.uid;

  useEffect(() => {
    const getProject = async () => {
      if (uid) {
        const projectsRef = collection(FIREBASE_DB, "projects");
        // Query tất cả các dự án mà user là uid người dùng hiện tại
        const q = await query(projectsRef, where("uidManager", "==", uid)); //uid Manager là tên trường trong csdl Projects
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
  }, [uid]);
  return projectsMap;
};

const addNewProject = async (newProjectData: any) => {
  try {
    // Lấy tham chiếu của bộ sưu tập 'projects' trong Firebase Firestore
    const projectsRef = collection(FIREBASE_DB, "projects");
    // Thêm dự án mới với dữ liệu được cung cấp vào Firestore
    const documentRef = await addDoc(projectsRef, newProjectData);
    console.log("Dự án mới đã được thêm với ID: ", documentRef.id);
    return documentRef.id; // Trả về ID của dự án mới được tạo
  } catch (error) {
    console.error("Có lỗi xảy ra khi thêm dự án mới:", error);
    return null; // Trong trường hợp lỗi, trả về null
  }
};

// Hàm này cập nhật hoặc thêm mới trường linkForm vào document của project dựa trên projectId
const addLinkForm = async (projectId: any, linkForm: any) => {
  try {
    // Tạo tham chiếu đến document của project dựa trên projectId
    const projectDocRef = doc(FIREBASE_DB, "projects", projectId);

    // Cập nhật hoặc thêm mới trường linkForm vào document
    // Sử dụng { merge: true } để đảm bảo các trường khác trong document không bị ảnh hưởng
    await setDoc(projectDocRef, { linkForm: linkForm }, { merge: true });

    console.log("Link form đã được thêm vào project ID: ", projectId);
    return projectId; // Trả về projectId để xác nhận quá trình thành công
  } catch (error) {
    console.error("Có lỗi xảy ra khi thêm link form:", error);
    return null; // Trả về null trong trường hợp có lỗi xảy ra
  }
};

export { addLinkForm, addNewProject, projectFirebase };

