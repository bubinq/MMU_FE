import { Button, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../contexts/AuthContext";

const Buttons = ({ type, text }) => {
  const { setUser, handleMenuClick } = useAuth();
  const goTo = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser({ accessToken: "" });
    handleMenuClick();
    goTo("/", { replace: true });
  };
  switch (type) {
    case "login":
      return (
        <Link to={"/login"} onClick={handleMenuClick} aria-label="login-button">
          <Button variant="login" transition="0.2s ease-in">
            <Text>{text}</Text>
          </Button>
        </Link>
      );
    case "logout":
      return (
        <Button
          className="btn-highlight"
          variant="logout"
          aria-label="logout-button"
          onClick={handleLogout}
        >
          <svg className="border-highlight" viewBox="0 0 160 56">
            <polyline points="159,1 159,55 1,55 1,1 159,1" />
            <polyline points="159,1 159,55 1,55 1,1 159,1" />
          </svg>
          <Text>{text}</Text>
        </Button>
      );
    case "signup":
      return (
        <Link to={"/register"} onClick={handleMenuClick}>
          <Button
            className="btn-highlight"
            variant="signup"
            aria-label="signup-button"
          >
            <svg className="border-highlight" viewBox="0 0 145 56">
              <polyline points="144,1 144,55 1,55 1,1 144,1" />
              <polyline points="144,1 144,55 1,55 1,1 144,1" />
            </svg>
            <Text>{text}</Text>
          </Button>
        </Link>
      );
  }
};

export default Buttons;
