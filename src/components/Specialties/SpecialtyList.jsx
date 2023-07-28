import { Form, useSubmit } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import MainCard from "../MainCard";

const SpecialtyList = ({ data }) => {
  const submit = useSubmit();
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
          className="img-link"
        >
          <MainCard
            title={
              <Heading as={"h3"} size="lg">
                {specialty.name}
              </Heading>
            }
            img={specialty.image_url}
          />
        </Form>
      ))}
    </>
  );
};

export default SpecialtyList;
