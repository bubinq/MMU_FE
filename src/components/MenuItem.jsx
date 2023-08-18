import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import useAuth from "../contexts/AuthContext";

const MenuItem = ({ to, children }) => {
  const { handleMenuClick } = useAuth();
  return (
    <NavLink
      aria-label={children}
      onClick={handleMenuClick}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active-link" : "styled-link"
      }
      to={to}
    >
      <Text fontSize={"xl"} color={"black"}>
        {children}
      </Text>
    </NavLink>
  );
};

export default MenuItem;
