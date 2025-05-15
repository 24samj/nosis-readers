// lib/firebaseClient.ts
import { initializeServerApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

const firebaseServerAppSettings = {
  authIdToken: "",
};

const serverApp = initializeServerApp(
  firebaseConfig,
  firebaseServerAppSettings,
);

export const auth = getAuth(serverApp);
export const db = getFirestore(serverApp);
