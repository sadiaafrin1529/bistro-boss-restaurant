import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const googleProvider = new GoogleAuthProvider();
  //google
  const googleSignIn = () => {
    setLoading(true)
   return signInWithPopup(auth, googleProvider);
  }





  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }


  // signIn
  const SignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // logout
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  //Update User Profile
  const ProfileUpdate = (name, photo) => {
    setLoading(true);
 return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
}



  useEffect(() => {
    const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("current user",currentUser)
      setLoading(false)
    })
    return () => {
      return unSubscribe();
    }
},[])



    const authInfo = {
      user,
      loading,
      createUser,
      SignIn,
      logout,
      ProfileUpdate,
      googleSignIn,
    };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

