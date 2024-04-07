// Importa solo lo necesario de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCWJuYGVSaKspC_elMfjzFDHKhQfu7AOi4",
  authDomain: "backend54045-cedd1.firebaseapp.com",
  projectId: "backend54045-cedd1",
  storageBucket: "backend54045-cedd1.appspot.com",
  messagingSenderId: "356073658827",
  appId: "1:356073658827:web:743d4f696c354ca08dbe4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore
export const db = getFirestore(app);
