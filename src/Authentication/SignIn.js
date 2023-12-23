import React from "react";
import { auth, googleProvider } from "../config/firabase-config";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button className="signIn" onClick={signInWithGoogle}>
        <FcGoogle /> Log In
      </button>
    </>
  );
}
