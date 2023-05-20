import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Chats from "./Component/Chats";
function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
