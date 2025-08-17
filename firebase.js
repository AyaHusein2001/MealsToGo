// firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyASO3tOwZLjzxD1HsPZCG6f_cHN2VqzdYo',
  authDomain: 'mealstogo-e1543.firebaseapp.com',
  projectId: 'mealstogo-e1543',
  storageBucket: 'mealstogo-e1543.firebasestorage.app',
  messagingSenderId: '750096988212',
  appId: '1:750096988212:web:479c3fa1e626bc19a1b261',
};

// ✅ Initialize Firebase app safely
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ✅ Ensure Auth is initialized with AsyncStorage persistence
let auth;
try {
  auth = getAuth(app);
} catch (e) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { app, auth };
