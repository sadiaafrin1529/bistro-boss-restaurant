import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const axiosPublic=useAxiosPublic()

const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  //google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Update User Profile
  const ProfileUpdate = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        //get tokhn and store client side
        const user ={email: currentUser?.email};//information pathabo
        axiosPublic.post('/jwt', user)
          .then((res) => {
            console.log(res?.data)
            if (res?.data?.token) {
              localStorage.setItem("access-token", res?.data?.token);
            }
        })
        

      } else {
        //remove token (if token stored in the client side: Local storage,caching,in memory. httponly cookie korle ekahn theke remove hobe na. js diye remove kora jayna . server side theke remove kora lagbe)
        localStorage.removeItem("access-token");
      }
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    SignIn,
    logout,
    ProfileUpdate,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
