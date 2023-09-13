import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
  user: { accessToken: "" },
  isMenuOpened: false,
  setIsMenuOpened: () => {},
  verifyMessage: "",
  setVerifyMessage: () => {},
  successMessage: "",
  setSuccessMessage: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return { accessToken: localStorage.getItem("accessToken") };
  });
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
