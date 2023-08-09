import { Flex } from "@chakra-ui/react";
import LoginModal from "../components/Login/LoginModal";
import { useRef, useEffect } from "react";
import { Canvas } from "../utils";

const Login = () => {
  const ref = useRef();
  useEffect(() => {
    new Canvas(ref.current);
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
