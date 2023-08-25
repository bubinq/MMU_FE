import { Flex } from "@chakra-ui/react";
import LoginModal from "../components/Login/LoginModal";
import useCanvasWaves from "../hooks/useCanvasWaves";
import useSpinner from "../hooks/useSpinner";
import Spinner from "../components/Spinner";

const Login = () => {
  const ref = useCanvasWaves();
  const isLoading = useSpinner();

  return (
    <Flex
      as={"section"}
      w={["75%", "85%", "95%"]}
      alignItems={"center"}
      justifyContent={"center"}
      mx={"auto"}
      minH={"100vh"}
      ref={ref}
    >
      {isLoading ? <Spinner /> : <LoginModal />}
    </Flex>
  );
};

export default Login;
