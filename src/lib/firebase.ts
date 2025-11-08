import { FirebaseError, initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc, 
} from "firebase/firestore";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import type { FirebaseActionResult } from "./definitions";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function signUpFirebase(
  email: string, 
  password: string
): Promise<FirebaseActionResult & { emailExists?: boolean, userId?: string }> {
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);

    return {
      message: "New user created",
      success: true,
      userId: credentials.user.uid,
    }
  } catch (error) {
    if (error instanceof FirebaseError && error.code === 'auth/email-already-in-use') {
      return {
        emailExists: true,
        message: "Email already exists",
        success: false,
      }
    }

    return {
      message: "Failed to create new user. Cause unknown",
      success: false,
    }
  }
}

export async function usernameExists(name: string): Promise<FirebaseActionResult & { exists?: boolean }> {
  const docRef = doc(db, "users", name);
  
  try {
    const snapshot = await getDoc(docRef);

    return {
      success: true,
      exists: snapshot.exists(),
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      return {
        success: false,
        message: error.code,
      }
    }

    return {
      success: false,
      message: "Failed to check if user exists. Cause unknown",
    }
  }
}

export async function addUserToDb(name: string, email: string): Promise<FirebaseActionResult> {
  try {
    const docRef = doc(db, "users", name);
    await setDoc(docRef, { name, email});

    return {
      success: true,
      message: "User successfully added to database",
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      return {
        success: false,
        message: error.code,
      }
    }

    return {
      success: false,
      message: "Failed to add user to database. Cause unknown",
    }
  }
}

export async function signInFirebase(
  email: string, 
  password: string
): Promise<FirebaseActionResult & { userId?: string }> {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);

    return { 
      success: true, 
      message: "Sign-in successful",
      userId: credentials.user.uid,
    };
  } catch (error) {
    if (error instanceof FirebaseError) {
      return {
        success: false,
        message: error.code,
      }
    }

    return {
      success: false,
      message: "Sign-in failed. Cause unknown",
    }
  }
}

export async function signOutFirebase(): Promise<FirebaseActionResult> {
  try {
    await signOut(auth);

    return { 
      success: true,
      message: "Sign-out successful",
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      return {
        success: false,
        message: error.code,
      }
    }

    return {
      success: false,
      message: "Sign-out failed. Cause unknown"
    }
  }
}
