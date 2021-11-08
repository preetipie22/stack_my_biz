// Initialize Cloud Firestore through Firebase
// import { getFirestore } from "firebase/firestore";
import { collection, query, where, addDoc, getDocs, updateDoc, getDoc, setDoc, doc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBXQq5li2s4-6aN6H3GgRW0h-NUxswY5lw",
//   authDomain: "stack-my-biz-10473.firebaseapp.com",
//   projectId: "stack-my-biz-10473",
//   storageBucket: "stack-my-biz-10473.appspot.com",
//   messagingSenderId: "594197990910",
//   appId: "1:594197990910:web:81eb1e8d7cbd4997b8c4af",
//   measurementId: "G-VL86EW3FDG"
// };


async function getLoginDetails() {
//     const loginDetailsCol = collection(getFirestore(), 'loginDetails');
//     const locationDetails = await getDocs(loginDetailsCol);
//     const userDetails = locationDetails.docs.map(doc => doc.data());
//     return userDetails;
}

async function addLoginDetails(db, id, loginDetails) {
    // const loginDetailsCol = collection(getFirestore(), 'loginDetails');
    // await addDoc(loginDetailsCol, loginDetails );
    await setDoc(doc(db, "loginDetails", id), loginDetails);
}

async function getUser() {
//     const userCol = collection(getFirestore(), 'user');
//     const locationDetails = await getDocs(userCol);
//     const loginDetails = locationDetails.docs.map(doc => doc.data());
//     return loginDetails;
}

async function addUser(db, user) {
    // const userCol = collection(getFirestore(), 'user', user.id);
    // await setDoc(userCol, user);
    // var db = getFirestore();
    // db.collection("user").doc(user.id).set(user);

    await setDoc(doc(db, "user", user.id), user);
}

async function getUsername(db, id) {
    const userDetails = await getDoc(doc(db, "user", id));
    if (userDetails.exists()) {
      return userDetails.data().username;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return '';
    }

}

async function updateLogoutTime(db, id, logoutTime){
    // const washingtonRef = doc(db, "cities", "DC");
    // Set the "capital" field of the city 'DC'
    await updateDoc(doc(db, "loginDetails", id), logoutTime);
    // const logoutCol = collection(getFirestore(), loginDetails, loginDetails.id);
    // await updateDoc(logoutCol, loginDetails);
    // const locationDetails = await getDocs(logoutCol);
    // const logoutDetails = locationDetails.docs.map(doc => doc.data());
    
}

async function getUserData(db, username, password){
    const q = query(collection(db, "user"), where("username", "==", username), where("password", "==", password));
    const userData = await getDocs(q);
    return userData.docs.map(doc => doc.data())[0];
}


export { getUser, addUser, getLoginDetails, addLoginDetails, getUsername, updateLogoutTime, getUserData};