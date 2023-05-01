import { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase';

const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setIsChecking(false);
        setIsLoggedIn(true);
      } else {
        setIsChecking(false);
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedIn]);
  return {isLoggedIn, isChecking}
}

export default useAuthStatus