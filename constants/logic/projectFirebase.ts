import { FIREBASE_AUTH, FIREBASE_DB } from "@/FirebaseConfig";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const projectFirebase = (projectId: any) => {
    const [projectsMap, setProjectsMap] = useState(new Map());
    const uid = FIREBASE_AUTH.currentUser?.uid;

    useEffect(() => {
        const getProject = async () => {
            if(uid) {
        const projectsRef = collection(FIREBASE_DB, "projects");
        // Query tất cả các dự án mà user là uid người dùng hiện tại
         const managersQuery = await query(projectsRef, where("uidManager", "==", uid));//uid Manager là tên trường trong csdl Projects
         const membersQuery = await query(projectsRef, where("uidMembers", "array-contains", uid));
         // Lưu tất cả các dự án được trả về từ query vào Map
         const newProjectsMap = new Map();
         const querySnapManager = await getDocs(managersQuery);
         const querySnapMember = await getDocs(membersQuery);
         querySnapManager.forEach((doc) => {
         newProjectsMap.set(doc.id, doc.data());
            });
        querySnapMember.forEach((doc) => {
        newProjectsMap.set(doc.id, doc.data());
            });
            setProjectsMap(newProjectsMap);
            }
        };
        getProject();
    },[uid]);
    return projectsMap;
}

const inforProjectFirebase = (projectId: any) => {
    const[name, setName] = useState(null);
    const [start,setStart] = useState(null);
    const [end,setEnd] = useState(null);
    const [manager,setManager] = useState(null);
    const [sponsor, setSponsor] = useState(null);
    const [question, setQuestion] = useState(null);
    const [purpose, setPurpose] = useState(null);
    useEffect(() => {
        const getInforProject = async () => {
            const projectRef = doc(FIREBASE_DB, "projects",projectId);
            const docSnapshot = await getDoc(projectRef);
            if(docSnapshot.exists()) {
                setName(docSnapshot.data().name);
                setStart(docSnapshot.data().start);
                setEnd(docSnapshot.data().end);
                setManager(docSnapshot.data().uidManager);
                setSponsor(docSnapshot.data().sponsor);
                setQuestion(docSnapshot.data().descript);
                setPurpose(docSnapshot.data().purpose);
            }
        };
        getInforProject();
    },[projectId]);

    return {name, start, end, manager, sponsor, question, purpose}

}
export { inforProjectFirebase, projectFirebase };

