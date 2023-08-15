import { Link, useSubmit } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import MainCard from "../MainCard";
import { useEffect } from "react";
import { BASE_URL } from "../../constants";
import useAuth from "../../contexts/AuthContext";
import jwt_decode from "jwt-decode";

const SpecialtyList = ({ data }) => {
  const submit = useSubmit();
  const { setUser } = useAuth();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jwtToken = urlParams.get("jwt_token");
    if (jwtToken) {
      const token = jwt_decode(jwtToken);
      localStorage.setItem(
        "accessToken",
        JSON.stringify({ email: token.sub, accessToken: jwtToken })
      );
      setUser({ accessToken: jwtToken });
      window.history.replaceState(null, null, BASE_URL);
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
