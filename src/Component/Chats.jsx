import { createBrowserHistory } from "history";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import Button from "react-bootstrap/Button";
export default function Chats() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const history = createBrowserHistory();

  async function handleLogout() {
    await auth.signOut();
    window.location.reload();
    history.push("/");
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        history.push("/");
        return;
      }

      // Get-or-Create should be in a Firebase Function
      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": "b39efe72-80e0-4bbe-a840-e2bbfb6a82f6",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })

        .then(() => setLoading(false))

        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users/", formdata, {
                headers: {
                  "private-key": fbf32438-52b7-4716-961c-e1d36f200264,
                },
              })
              .then(() => setLoading(false))
              .catch((e) => console.log("e", e.response));
          });
        });
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
  }, [user, history]);

  if (!user || loading) return <div />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Real Time Chat App</div>
        <Button onClick={handleLogout} className="logout-tab">
          Logout
        </Button>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="b39efe72-80e0-4bbe-a840-e2bbfb6a82f6"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}
