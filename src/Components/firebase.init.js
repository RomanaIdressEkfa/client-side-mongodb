
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCSsshABPJnWfeGAh7DFf-BoJyS7rV9POw",
//   authDomain: "asighnment-11-projects.firebaseapp.com",
//   projectId: "asighnment-11-projects",
//   storageBucket: "asighnment-11-projects.appspot.com",
//   messagingSenderId: "227739145146",
//   appId: "1:227739145146:web:a33d04b7bdcb434f3e4383"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD83gLOTKpl5pJz6iBEOQlB6qKQ71ipZgM",
  authDomain: "client-side-mongodb.firebaseapp.com",
  projectId: "client-side-mongodb",
  storageBucket: "client-side-mongodb.appspot.com",
  messagingSenderId: "432935207824",
  appId: "1:432935207824:web:8c847c5d318e5943d7a915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;