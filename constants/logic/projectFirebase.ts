import firebase from "firebase/firestore";

export async function getUserProjects() {
    const user = firebase.auth().currentUser;
    let projects = new Map();
  
    if (user) {
      const uid = user.uid;  // Lấy uid của người dùng hiện tại
  
      // Tạo một tham chiếu đến collection "DA"
      const daRef = firebase.firestore().collection('DA');
  
      // Query tất cả các dự án mà user là uid người dùng hiện tại
      const snapshot = await daRef.where('user', '==', uid).get();
  
      // Lưu tất cả các dự án được trả về từ query vào Map
      snapshot.forEach((doc) => {
        projects.set(doc.id, doc.data());
      });
    } 
  
    return projects;  // Trả về Map chứa tất cả các dự án của người dùng
  }