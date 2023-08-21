import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useCanvasWaves from "../hooks/useCanvasWaves.jsx";

const AuthPage = () => {
  const ref = useCanvasWaves();

  return (
    <Box as={"section"} w={"100%"} mx={"auto"} minH={"100vh"} ref={ref}>
      <Outlet/>
    </Box>
  );
};

export default AuthPage;
