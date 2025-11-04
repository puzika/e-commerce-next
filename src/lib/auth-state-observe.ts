import { useState, useEffect } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./firebase";

export default function useAuthState() {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      if (
        !user ||
        !authUser || 
        user.uid !== authUser.uid
      ) setUser(authUser);
    });
    
    return () => unsubscribe();
  }, []);

  return user;
}