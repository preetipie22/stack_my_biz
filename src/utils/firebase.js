// Initialize Cloud Firestore through Firebase
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
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
    const loginDetailsCol = collection(getFirestore(), 'loginDetails');
    const locationDetails = await getDocs(loginDetailsCol);
    const userDetails = locationDetails.docs.map(doc => doc.data());
    return userDetails;
}

async function addLoginDetails(loginDetails) {
    const loginDetailsCol = collection(getFirestore(), 'loginDetails');
    await addDoc(loginDetailsCol, loginDetails );
}

async function getUser() {
    const userCol = collection(getFirestore(), 'user');
    const locationDetails = await getDocs(userCol);
    const loginDetails = locationDetails.docs.map(doc => doc.data());
    return loginDetails;
}

async function addUser(user) {
    const userCol = collection(getFirestore(), 'user');
    await addDoc(userCol, user );
}

export { getUser, addUser, getLoginDetails, addLoginDetails };