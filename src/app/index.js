import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDlKb6bj5jwXf6CzDoCm6ceIBwY95s-D4U',
  authDomain: 'meca-friendster.firebaseapp.com',
  projectId: 'meca-friendster',
  storageBucket: 'meca-friendster.appspot.com',
  messagingSenderId: '981111751785',
  appId: '1:981111751785:web:6af89069a15dfb1b920ef8',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const storage = getStorage();
