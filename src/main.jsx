import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "../ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectyoutubeBC from "./components/ProjectPages/ProjectyoutubeBC.jsx";
import ProjectyoutubeFC from "./components/ProjectPages/ProjectyoutubeFC.jsx";
import ProjectmusicPlayer from "./components/ProjectPages/ProjectmusicPlayer.jsx";
import Projectfilesharing from "./components/ProjectPages/Projectfilesharing.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/projectPage/Youtube-Backend-Clone",
    element:<ProjectyoutubeBC/>
  }
 , 
  {
    path:"/projectPage/Youtube-Frontend-Clone",
    element:<ProjectyoutubeFC/>
  }
  ,
  {
    path:"/projectPage/React-Music-Player",
    element:<ProjectmusicPlayer/>
  }
  ,
  {
    path:"/projectPage/Secure-File-Sharing-Platform",
    element:<Projectfilesharing/>
  }
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
