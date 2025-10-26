import { FirebaseError } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import type { AuthenticationResult } from "./definitions";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function createUser(email: string, password: string): Promise<AuthenticationResult> {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    return {
      message: "New user created",
      success: true,
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      return {
        message: `Failed to create new user. ${error.message}`,
        success: false,
      }
    }

    return {
      message: "Failed to create new user. Cause unknown",
      success: false,
    }
  }
}