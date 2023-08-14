import { Flex } from "@chakra-ui/react";
import LoginModal from "../components/Login/LoginModal";
import { useEffect, useRef } from "react";
import { Canvas } from "../utils";

const Login = () => {
  const ref = useRef();
  const canvasRef = useRef();
  useEffect(() => {
    canvasRef.current = new Canvas(ref.current);
    return () => {
      if (canvasRef.current) {
        canvasRef.current.cleanup();
        canvasRef.current = null;
      }
    };
  }, []);

  return (
    <Flex
      as={"section"}
      w={["75%", "85%", "95%"]}
      justifyContent={"center"}
      mx={"auto"}
      minH={"100vh"}
      ref={ref}
    >
      <LoginModal />
    </Flex>
  );
};

export default Login;
