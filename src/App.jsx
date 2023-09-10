import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Spinner from "./components/Spinner";

function App() {
  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
}

export default App;
