import { Form, useSubmit } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import MainCard from "../MainCard";
import { useEffect } from "react";
import jwt_decode from "jwt-decode"

const SpecialtyList = ({ data }) => {
  const submit = useSubmit();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jwtToken = urlParams.get("jwt_token");
    if (jwtToken) {
      const token = jwt_decode(jwtToken)
      console.log(token);
    }
    console.log(jwtToken);
  }, []);
  return (
    <>
      {data.content.map((specialty) => (
        <Form
          key={specialty.id}
          action="/specialists"
          onClick={() => {
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
        </Form>
      ))}
    </>
  );
};

export default SpecialtyList;
