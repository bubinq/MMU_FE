import { Navigate } from "react-router-dom";
import useAuth from "../contexts/AuthContext";

const AuthGuard = ({children}) => {
  const { user } = useAuth();
  if (!user.accessToken) {
    return <>{children}</>;
  }
  return <Navigate to={"/"} replace />;
};

export default AuthGuard;
