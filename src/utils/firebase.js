import { collection, query, where, addDoc, getDocs, updateDoc, getDoc, setDoc, doc } from "firebase/firestore"; 

// adds new id, login time and logout time
async function addLoginDetails(db, id, loginDetails) {
    await setDoc(doc(db, "loginDetails", id), loginDetails);
}

// adds new user id, username and password
async function addUser(db, user) {
    await setDoc(doc(db, "user", user.id), user);
}

// adds new user lat long and id
async function insertUserLocation(db, id, location) {
    console.log('location');
    await addDoc(collection(db, "location"), {
        id,
        date: new Date().toISOString(),
        location: `lat: ${location.coords.latitude} lon: ${location.coords.longitude}`
    });
}

// gets the existing username corresponding to id
async function getUsername(db, id) {
    const userDetails = await getDoc(doc(db, "user", id));
    if (userDetails.exists()) {
      return userDetails.data().username;
    } else {
      console.log("No such document!");
      return '';
    }

}

// updates the login details collection with logout time
async function updateLogoutTime(db, id, logoutTime){
    await updateDoc(doc(db, "loginDetails", id), logoutTime);
    
}

// gets the existing id corresponding to the username and password
async function getUserData(db, username, password){
    const q = query(collection(db, "user"), where("username", "==", username), where("password", "==", password));
    const userData = await getDocs(q);
    return userData.docs.map(doc => doc.data())[0];
}


export { addUser, addLoginDetails, getUsername, updateLogoutTime, getUserData, insertUserLocation};