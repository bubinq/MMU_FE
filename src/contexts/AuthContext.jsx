import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
  user: { accessToken: "" },
  isMenuOpened: false,
  setIsMenuOpened: () => {},
  showVerifyMessage: false,
  setVerifyMessage: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return { accessToken: localStorage.getItem("accessToken") };
  });
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState("");

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
