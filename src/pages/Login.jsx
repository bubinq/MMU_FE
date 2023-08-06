import { Flex } from "@chakra-ui/react";
import LoginModal from "../components/LoginModal";

const Login = () => {
  return (
    <Flex as={"section"} w={["75%", "85%", "95%"]} justifyContent={"center"} h={"100vh"} mx={"auto"}>
      <LoginModal/>
    </Flex>
  );
};

export default Login;
