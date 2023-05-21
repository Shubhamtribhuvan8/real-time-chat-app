import React, { useState } from "react";
import { app } from "../firebase";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const auth = getAuth(app);

const PopUpGoogle = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  // Google provider
  const provider = new GoogleAuthProvider();

  // Github provider
  //   const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate("/chats"); // Redirect to chat route
      })
      .catch((error) => {
        console.log("error", error);
      });

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        window.location.reload();
        navigate("/");
      })
      .catch((error) => {
        setUser({});
        navigate("/");
      });
  };

  //   const handleGithubSignIn = () => {
  //     signInWithPopup(auth, githubProvider)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //         navigate("/chats"); // Redirect to chat route
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //       });
  //   };

  return (
    <div>
      {user.email ? (
        <Button variant="primary" onClick={handleGoogleSignOut}>
          Log Out
        </Button>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card style={{ width: "26rem" }}>
            <Card.Img
              variant="top"
              src="https://plus.unsplash.com/premium_photo-1681487872232-fa622a6dd59e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Real Time Chat App</Card.Title>
              <br />
              <Button variant="success" onClick={handleGoogleSignIn}>
                Google Sign in
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PopUpGoogle;
