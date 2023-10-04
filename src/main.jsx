// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALzLJpMRbYn1zCkGobhbbAQT5ku5C5Veg",
  authDomain: "la-tiendita-b1add.firebaseapp.com",
  projectId: "la-tiendita-b1add",
  storageBucket: "la-tiendita-b1add.appspot.com",
  messagingSenderId: "962648372750",
  appId: "1:962648372750:web:7d848a2d08fee9e72aee5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>

)