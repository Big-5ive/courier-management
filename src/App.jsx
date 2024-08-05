import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Login from "./Auth/Login/Login";
import LandingPage from "./Pages/Home/LandingPage/LandingPage";
import Container from "./Container/Container";
import Allpackages from "./Pages/allpackage/allpackagePage";
import CreatePackage from "./Pages/createPackage/createPackagecomp";
import AllUser from "./Pages/alluser/alluser";
import Track from "./Pages/Track/Track";
import Company from "./Pages/About/Company";
import OffshoreIntake from "./Pages/ourServices/OffshoreIntake";
import ContactUs from "./Pages/Contact/ContactUs";
import ClientLogin from "./Auth/Login/ClientLogin";

const route = createHashRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/track",
        element: <Track />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/offshore",
        element: <OffshoreIntake />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/adminlogin",
    element: <Login />,
  },
  {
    path: "/login",
    element: <ClientLogin />,
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
