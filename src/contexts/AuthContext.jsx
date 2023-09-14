import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
  user: { accessToken: "" },
  isMenuOpened: false,
  setIsMenuOpened: () => {},
  verifyMessage: "",
  setVerifyMessage: () => {},
  successMessage: "",
  setSuccessMessage: () => {},
  broadcastInstance: BroadcastChannel,
});

const broadcastChannel = new BroadcastChannel("reloadChannel");
broadcastChannel.onmessage = function (event) {
  if (event.data && event.data.action === "reload") {
    window.location.reload();
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return { accessToken: localStorage.getItem("accessToken") };
  });
  const [broadcastInstance, _] = useState(broadcastChannel);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleMenuClick,
        isMenuOpened,
        setIsMenuOpened,
        verifyMessage,
        setVerifyMessage,
        successMessage,
        setSuccessMessage,
        broadcastInstance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
