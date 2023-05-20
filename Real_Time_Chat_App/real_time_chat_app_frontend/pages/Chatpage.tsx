import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";
interface ChatProps {
  user: User;
}

export default function ChatPage(props: ChatProps) {
  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{ position: "absolute", top: "0px", left: "0px" }}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
      <PrettyChatWindow
        projectId="b39efe72-80e0-4bbe-a840-e2bbfb6a82f6"
        username={props.user.email || ""}
        secret={props.user.uid}
        style={{ height: "100%" }}
      />
    </div>
  );
}
