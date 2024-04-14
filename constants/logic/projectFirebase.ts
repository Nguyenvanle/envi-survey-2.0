import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { isLoading } from "expo-font";
import {
  addDoc,
  collection,
  doc,
  getDoc,
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
        const m = await query(
          projectsRef,
          where("uidMembers", "array-contains", uid)
        );
        // Lưu tất cả các dự án được trả về từ query vào Map
        const newProjectsMap = new Map();
        const querySnapshot = await getDocs(q);
        const queryM = await getDocs(m);
        querySnapshot.forEach((doc) => {
          newProjectsMap.set(doc.id, doc.data());
        });
        queryM.forEach((doc) => {
          newProjectsMap.set(doc.id, doc.data());
        });
        setProjectsMap(newProjectsMap);
      }
    };
    getProject();
  }, [uid]);
  return projectsMap;
};

const FormFirebase = (SampId: any) => {
  const [projectsMap, setProjectsMap] = useState(new Map());
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      if (SampId) {
        const projectsRef = collection(FIREBASE_DB, "samplingDetails");
        // Query tất cả các dự án mà user là uid người dùng hiện tại
        const q = await query(projectsRef, where("idPeriod", "==", SampId)); //uid Manager là tên trường trong csdl Projects
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
  }, [SampId]);
  return { projectsMap, isLoading };
};

const nameProjectFirebaseUser = (projectId: any) => {
  const [projectName, setProjectName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUserName = async () => {
      if (projectId) {
        const userRef = doc(FIREBASE_DB, "projects", projectId);
        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            setProjectName(docSnapshot.data().name); // Thay 'username' bằng tên field chứa tên người dùng
          } else {
            console.log("Cannot find user data!");
          }
        } catch (error) {
          console.error("Error getting user data:", error);
        }
        setIsLoading(false);
      } else {
        console.log(projectId);
        setIsLoading(false);
      }
    };

    if (projectId) {
      getUserName();
    }
  }, [projectId]);

  return { projectName, isLoading };
};

const getLinkFirebaseUser = (projectId: any) => {
  const [link, setLink] = useState("");
  const [isLoadingGetLink, setIsLoading] = useState(true);
  useEffect(() => {
    const getUserName = async () => {
      if (projectId) {
        const userRef = doc(FIREBASE_DB, "projects", projectId);
        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            setLink(docSnapshot.data().linkForm); // Thay 'username' bằng tên field chứa tên người dùng
          } else {
            console.log("Cannot find user data!");
          }
        } catch (error) {
          console.error("Error getting user data:", error);
        }
        setIsLoading(false);
      } else {
        console.log(projectId);
        setIsLoading(false);
      }
    };

    if (projectId) {
      getUserName();
    }
  }, [projectId]);

  return { link, isLoadingGetLink };
};

const LinkFormFirebaseUser = (SampId: any) => {
  const [linkFormMap, setProjectsMap] = useState(new Map());
  const [isLoadingMap, setIsloading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      if (SampId) {
        const projectsRef = collection(FIREBASE_DB, "samplingDetails");
        // Query tất cả các dự án mà user là uid người dùng hiện tại
        const q = await query(
          projectsRef,
          where("idPeriod", "==", SampId),
          where("status", "==", false)
        ); //uid Manager là tên trường trong csdl Projects
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
  }, [SampId]);
  return { linkFormMap, isLoadingMap };
};

const namePeriodFirebaseUser = (periodId: any) => {
  const [periodName, setPeriodName] = useState("");
  const [isLoadingPeriod, setIsLoading] = useState(true);
  useEffect(() => {
    const getUserName = async () => {
      if (periodId) {
        const userRef = doc(FIREBASE_DB, "samplingPeriod", periodId);
        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            setPeriodName(docSnapshot.data().name); // Thay 'username' bằng tên field chứa tên người dùng
          } else {
            console.log("Cannot find user data!");
          }
        } catch (error) {
          console.error("Error getting user data:", error);
        }
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    if (periodId) {
      getUserName();
    }
  }, [periodId]);

  return { periodName, isLoadingPeriod };
};

const detailsProjectFirebase = (projectUid: any) => {
  const [name, setName] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [uidManager, setUidManager] = useState(null);
  const [question, setQuestion] = useState(null);
  const [purpose, setPurpose] = useState(null);
  const [isLoadingDetail, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetailsProjectFirebase = async () => {
      if (projectUid) {
        const detailRef = doc(FIREBASE_DB, "projects", projectUid);
        try {
          const snap = await getDoc(detailRef);
          if (snap.exists()) {
            setName(snap.data().name);
            setStart(snap.data().start);
            setEnd(snap.data().end);
            setUidManager(snap.data().uidManager);
            setQuestion(snap.data().descript);
            setPurpose(snap.data().purpose);
            setIsLoading(false);
          }
        } catch (error) {
          {
            console.log("Error");
          }
          setIsLoading(false);
        }
      }
    };
    if (projectUid) getDetailsProjectFirebase();
  }, [projectUid]);
  return { name, start, end, uidManager, question, purpose, isLoadingDetail };
};

const samplingFirebase = (uidProject: any) => {
  const [samplingsMap, setSamplingsMap] = useState(new Map());
  const [isLoadingSampling, setIsLoading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      if (uidProject) {
        const projectsRef = collection(FIREBASE_DB, "samplingPeriod");
        // Query tất cả các dự án mà user là uid người dùng hiện tại
        const q = await query(
          projectsRef,
          where("uidProject", "==", uidProject)
        ); //uid Manager là tên trường trong csdl Projects
        // Lưu tất cả các dự án được trả về từ query vào Map
        const newProjectsMap = new Map();
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          newProjectsMap.set(doc.id, doc.data());
        });
        setSamplingsMap(newProjectsMap);
        setIsLoading(false);
      } else setIsLoading(false);
    };
    getProject();
  }, [uidProject]);
  return { samplingsMap, isLoadingSampling };
};

function getRemainingDays(end: any) {
  const [remaining, setRemaining] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getRemaining = async () => {
      if (end) {
        const [day, month, year] = end.split("/");
        const endDate = new Date(year, month - 1, day);
        const now = new Date();
        const remainingMilliseconds = endDate.getTime() - now.getTime();
        const remainingDays = Math.ceil(
          remainingMilliseconds / (1000 * 60 * 60 * 24)
        );
        if (remainingDays < 0) {
          setRemaining("Quá hạn dự án");
        } else {
          setRemaining(`Thời gian còn lại: ${remainingDays} ngày`);
        }
        setIsLoading(false);
      } else {
        console.log(end);
        setIsLoading(false);
      }
    };
    if (end) {
      getRemaining();
    }
  }, [end]);
  return { remaining, isLoading };
}

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

const verifyProjectId = async (inputProjectId: string) => {
  try {
    // Tạo tham chiếu đến document của project dựa trên inputProjectId
    const projectDocRef = doc(FIREBASE_DB, "projects", inputProjectId);
    // Thực hiện truy vấn để lấy document
    const docSnapshot = await getDoc(projectDocRef);
    // Kiểm tra xem document có tồn tại không
    if (docSnapshot.exists()) {
      console.log("Mã dự án tồn tại: ", docSnapshot.id);
      return true; // Mã dự án tồn tại
    } else {
      console.log("Không tìm thấy mã dự án: ", inputProjectId);
      return false; // Mã dự án không tồn tại
    }
  } catch (error) {
    console.error("Có lỗi xảy ra khi kiểm tra mã dự án:", error);
    return false; // Có lỗi xảy ra trong quá trình kiểm tra
  }
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

export {
  LinkFormFirebaseUser,
  addLinkForm,
  addNewProject,
  detailsProjectFirebase,
  getLinkFirebaseUser,
  getRemainingDays,
  namePeriodFirebaseUser,
  nameProjectFirebaseUser,
  projectFirebase,
  samplingFirebase,
  verifyProjectId,
};
