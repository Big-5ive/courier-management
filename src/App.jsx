import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Login from "./Auth/Login/Login";
import LandingPage from "./Pages/Home/LandingPage/LandingPage";
import Container from "./Container/Container";

const route = createHashRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={route} />
    </>
  );
}

export default App;
