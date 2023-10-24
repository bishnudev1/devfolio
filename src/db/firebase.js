import { initializeApp } from "firebase/app";
import { collection, where, getDocs, getFirestore, query } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  const app = initializeApp(firebaseConfig);


  export const db = getFirestore(app);



  export const fetchPost = async (email) => {
    const contactsCollection = collection(db, "tradContacts");
  
    const queryData = query(contactsCollection, where("email", "==", email));
  
    const querySnapshot = await getDocs(queryData);

    var resp;
  
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      resp = data;
    });


    return resp;
  };

  export default app;