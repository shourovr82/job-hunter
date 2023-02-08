import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_Firebase_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_Firebase_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_Firebase_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_Firebase_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_Firebase_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_Firebase_APPID,
};
const app = initializeApp(firebaseConfig);

export default app;
