import { Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Buttons = ({ type, text }) => {
  switch (type) {
    case "login":
      return (
        <Link to={"/login"}>
          <Button variant="login" transition="0.2s ease-in">
            <Text>{text}</Text>
          </Button>
        </Link>
      );
    case "logout":
      return (
        <Button className="btn-highlight" variant="logout" >
          <svg className="border-highlight" viewBox="0 0 160 56">
            <polyline points="159,1 159,55 1,55 1,1 159,1" />
            <polyline points="159,1 159,55 1,55 1,1 159,1" />
          </svg>
          <Text>{text}</Text>
        </Button>
      );
    case "signup":
      return (
        <Link to={"/register"}>
          <Button className="btn-highlight" variant="signup">
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
