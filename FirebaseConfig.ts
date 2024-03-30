import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdKo8yr10BoFnWi0q0O6jEgRS4OETqwx4",
  authDomain: "envi-survey.firebaseapp.com",
  projectId: "envi-survey",
  storageBucket: "envi-survey.appspot.com",
  messagingSenderId: "799342916011",
  appId: "1:799342916011:web:5e5bc652e76e242b1b62ee",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
