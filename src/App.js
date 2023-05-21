import React from "react";
// import EmailPasswordAuth from "./Component/EmailPasswordAuth";
import PopUpGoogle from "./Component/PopUpGoogle";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Chats from "./Component/Chats";
function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PopUpGoogle />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
