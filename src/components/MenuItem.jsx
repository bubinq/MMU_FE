import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const MenuItem = ({ to, children, handleMenuClick }) => {
  return (
    <NavLink
      onClick={handleMenuClick}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active-link" : "styled-link"
      }
      to={to}
    >
      <Text fontSize={"2xl"} color={"blue.900"}>{children}</Text>
    </NavLink>
  );
};

export default MenuItem;
