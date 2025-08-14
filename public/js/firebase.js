import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyB5XoFboRGm3ZqqKm-jABSlOnNwf8hY7FY",
  authDomain: "my-cv-3cfd4.firebaseapp.com",
  databaseURL: "https://my-cv-3cfd4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-cv-3cfd4",
  storageBucket: "my-cv-3cfd4.firebasestorage.app",
  messagingSenderId: "808151962248",
  appId: "1:808151962248:web:8672814e542077dd56c53d",
  measurementId: "G-9ZLP4FS0FC"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);