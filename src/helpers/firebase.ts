import { ServiceAccount } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { FIREBASE_CLIENT_EMAIL, FIREBASE_KEY, FIREBASE_PROJECT_ID } from "../config/env.js";

initializeApp({
  credential: cert({
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_KEY,
  } satisfies ServiceAccount),
});

const fs = getFirestore();

export default fs;