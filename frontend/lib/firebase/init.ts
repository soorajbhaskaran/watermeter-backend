import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyADoFNom2Tt994J_KChDuvp5sRZ7MkRiok",
  authDomain: "water-authority-ddd3c.firebaseapp.com",
  projectId: "water-authority-ddd3c",
  storageBucket: "water-authority-ddd3c.appspot.com",
  messagingSenderId: "701094430285",
  appId: "1:701094430285:web:ddb6aa60bd5412f7803e04",
  measurementId: "G-5S42C2Y61L",
};

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

export const app = createFirebaseApp(firebaseConfig);

if (process.env.NODE_ENV === "production") {
  if (typeof window !== "undefined") {
    getAnalytics(app);
  }
}
