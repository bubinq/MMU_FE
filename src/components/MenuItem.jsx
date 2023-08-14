import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const MenuItem = ({ to, children, handleMenuClick }) => {
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
