import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VIRE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VIRE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VIRE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VIRE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VIRE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
