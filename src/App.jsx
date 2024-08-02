import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Login from "./Auth/Login/Login";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Container from "./Container/Container";
import Allpackages from "./Pages/allpackage/allpackage";
import CreatePackage from "./Pages/createPackage/createPackage";
import AllUser from "./Pages/alluser/alluser";

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
  {
    path: "allpackage",
    element: <Allpackages />
  },
  {
    path: "createpackage",
    element: <CreatePackage />
  },
  {
    path: "blockauser",
    element: <AllUser />
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
