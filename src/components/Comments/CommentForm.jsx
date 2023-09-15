import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormLabel, Flex, Textarea, Button, Spinner } from "@chakra-ui/react";
import { commentsSchema, commentsVals } from "../../utils";
import { useRevalidator } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import specialistService from "../../services/specialist";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../contexts/AuthContext";

export default function CommentForm({ doctorId }) {
  const revaldatior = useRevalidator();
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleAddComment = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      await specialistService.addComment({
        doctorId,
        comment: values.comment,
        rating: values.rating,
      });
      revaldatior.revalidate();
      setHover(0);
      setRating(0);
      resetForm();
    } catch (error) {
      console.log(error.response.data.comment);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Formik
      initialValues={commentsVals}
      validationSchema={commentsSchema}
      onSubmit={handleAddComment}
    >
      {({ values, errors }) => (
        <Form className="comments-form">
          <FormLabel
            fontSize={"18px"}
            fontWeight={700}
            margin={0}
            pos={"relative"}
            mt={"18px"}
          >
            Rating &#42;
            <Field name="rating" aria-label="rating-field">
              {({ form: { setValues } }) => (
                <Flex mt={"8px"}>
                  {[...Array(5)].map((_, index) => {
                    const value = index + 1;
                    return (
                      <FontAwesomeIcon
                        icon={faStar}
                        color={value <= (hover || rating) ? "#d9af0e" : "grey"}
                        key={index}
                        style={{ transition: "all .3s" }}
                        onMouseEnter={() => {
                          if (!user.accessToken) return;
                          setHover(value);
                        }}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => {
                          if (!user.accessToken) return;
                          setRating(value);
                          setValues((prev) => ({
                            ...prev,
                            rating: value,
                          }));
                        }}
                      />
                    );
                  })}
                </Flex>
              )}
            </Field>
            <ErrorMessage
              aria-label="rating-error"
              name="rating"
              component="span"
              className="error-message"
            />
          </FormLabel>
          <FormLabel
            fontSize={"18px"}
            fontWeight={700}
            margin={0}
            pos={"relative"}
          >
            Comment &#42;
            <Field name="comment" aria-label="comment-field">
              {({ field }) => (
                <Textarea
                  placeholder={`${
                    !user.accessToken
                      ? "Only logged in users can leave a comment..."
                      : "Drop a comment here..."
                  }`}
                  isDisabled={!user.accessToken}
                  {...field}
                  resize={"none"}
                  h={"106px"}
                  mt={"24px"}
                />
              )}
            </Field>
            <ErrorMessage
              aria-label="comment-error"
              name="comment"
              component="span"
              className="error-message"
            />
          </FormLabel>

          <Button
            type="submit"
            aria-label="comment-submit"
            h={"44px"}
            ml={"auto"}
            fontSize={"16px"}
            color={"blue.900"}
            borderRadius="5px"
            isDisabled={
              !values.rating ||
              !values.comment ||
              isLoading ||
              !user.accessToken ||
              errors.rating ||
              errors.comment
            }
            px={"2rem"}
            mt={"5px"}
            transition={"0.2s all ease"}
            bg={"yellow.400"}
            _hover={{ bg: "red.300", color: "white" }}
          >
            {isLoading ? (
              <Spinner thickness="4px" speed="0.65s" color="white" size="lg" />
            ) : (
              "Send feedback"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
