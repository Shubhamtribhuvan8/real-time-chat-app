import { auth } from "@/firebase";
import {
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";

export default function AuthPage() {
  const onClick = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  // Handle redirect result on page load
  useEffect(() => {
    getRedirectResult(auth)
      .then((result: any) => {
        // Handle successful authentication
        const user = result.user;
        console.log("User authenticated:", user);
      })
      .catch((error) => {
        // Handle authentication error
        console.error("Authentication error:", error);
      });
  }, []);

  return (
    <div className="page">
      <div className="logo">👋 💬 🤖 </div>
      <div className="text">Welcome to ChatRCE</div>
      <div className="text" style={{ paddingBottom: "16px" }}>
        Log in with your account to continue
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button>{" "}
      <button className="button" onClick={onClick}>
        Sign Up
      </button>
    </div>
  );
}
