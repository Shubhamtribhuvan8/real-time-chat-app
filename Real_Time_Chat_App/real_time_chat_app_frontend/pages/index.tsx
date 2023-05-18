// import Head from "next/head";
import { useState } from "react";
import AuthPage from "./Authpage";
import ChatPage from "./Chatpage";
import { User } from "firebase/auth";
import { auth } from "@/firebase";
import Loading from "./Loading";
export default function Home() {
  const [user, setUser] = useState<User | null>();
  auth.onAuthStateChanged((user) => setUser(user));

  if (user === undefined) {
    return <Loading />;
  } else if (user === null) {
    return <AuthPage />;
  } else {
    return <ChatPage user={user} />;
  }
}
