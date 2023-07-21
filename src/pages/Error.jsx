import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Return Home</Link>
    </>
  );
};

export default Error;
