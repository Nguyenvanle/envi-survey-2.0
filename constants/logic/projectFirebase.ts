import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
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
  
    return {projectName,isLoading};
  };

const detailsProjectFirebase = (projectUid: any) => {
    const[name,setName] = useState(null);
    const[start,setStart] = useState(null);
    const[end,setEnd] = useState(null);
    const[uidManager,setUidManager] = useState(null);
    const[sponsor,setSponsor] = useState(null);
    const[question,setQuestion] = useState(null);
    const[purpose, setPurpose] = useState(null);

    useEffect(()=> {
        const getDetailsProjectFirebase = async () => {
            if(projectUid) {
                const detailRef = doc(FIREBASE_DB,"projects",projectUid);
                try {
                    const snap = await getDoc(detailRef);
                    if(snap.exists()) {
                        setName(snap.data().name);
                        setStart(snap.data().start);
                        setEnd(snap.data().end);
                        setUidManager(snap.data().uidManager);
                        setSponsor(snap.data().sponsor);
                        setQuestion(snap.data().descript);
                        setPurpose(snap.data().purpose);
                    }
                } catch(error) {console.log("Error")}
            }
        };
        getDetailsProjectFirebase();
    }, [projectUid]);
    return {name, start, end, uidManager, sponsor, question, purpose};
};

const samplingFirebase = (uidProject: any) => {
    const [samplingsMap, setSamplingsMap] = useState(new Map());
    
    useEffect(() => {
        const getProject = async () => {
            if(uidProject) {
        const projectsRef = collection(FIREBASE_DB, "samplingPeriod");
        // Query tất cả các dự án mà user là uid người dùng hiện tại
         const q = await query(projectsRef, where("uidProject", "==", uidProject));//uid Manager là tên trường trong csdl Projects
         // Lưu tất cả các dự án được trả về từ query vào Map
         const newProjectsMap = new Map();
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
         newProjectsMap.set(doc.id, doc.data());
            });
            setSamplingsMap(newProjectsMap);
            }
        };
        getProject();
    },[uidProject]);
    return samplingsMap;
}

export {
    detailsProjectFirebase, nameProjectFirebaseUser, projectFirebase,
    samplingFirebase
};

