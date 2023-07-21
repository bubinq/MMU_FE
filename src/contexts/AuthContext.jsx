import { createContext, useState, useContext } from "react";

const AuthContext = createContext({ user: { name: "" } });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "" });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
