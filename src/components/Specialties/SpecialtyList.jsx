import { Link, useSubmit, useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import MainCard from "../MainCard";
import { useEffect } from "react";
import useAuth from "../../contexts/AuthContext";

const SpecialtyList = ({ data }) => {
  const submit = useSubmit();
  const goTo = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jwtToken = urlParams.get("jwt_token");
    if (jwtToken) {
      localStorage.setItem("accessToken", jwtToken);

      setUser({ accessToken: jwtToken });
      goTo("/", { replace: true });
    }
  }, []);
  return (
    <>
      {data.content.map((specialty) => (
        <Link
          key={specialty.id}
          to={"/specialists"}
          onClick={(ev) => {
            ev.preventDefault();
            submit(
              { id: specialty.id },
              {
                method: "post",
                action: "/specialists",
              }
            );
          }}
          className="home-img-link"
        >
          <MainCard
            title={
              <Heading as={"h3"} size="lg">
                {specialty.name}
              </Heading>
            }
            img={specialty.image_url}
            source="home"
          />
        </Link>
      ))}
    </>
  );
};

export default SpecialtyList;
