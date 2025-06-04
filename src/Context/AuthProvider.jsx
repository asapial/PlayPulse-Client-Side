import React, { useEffect, useState } from "react";
import { AuthContext } from "../main";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../FireBase/FireBase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password, name, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          return user;
        });
      })
      .finally(() => setLoading(false));
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {

        return res;
      })
      .finally(() => setLoading(false));
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {

      })
      .finally(() => setLoading(false));
  };

  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
      })
      .finally(() => setLoading(false));
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider).finally(() => setLoading(false));
  };

  const resetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      setUser(userData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []); 

  const data = {
    createUser,
    loginUser,
    signOutUser,
    updateUser,
    user,
    loading,
    loginWithGoogle,
    resetEmail,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
