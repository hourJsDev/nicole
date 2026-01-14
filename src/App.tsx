import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ProjectLayout from "./layouts/ProjectLayout";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // The layout wraps the children
    children: [
      {
        index: true, // This makes Home the default at "/"
        element: <Home />,
      },
      {
        path: "project",
        element: <ProjectLayout />,
        children: [
          {
            path: ":id",
            element: <ProjectDetail />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
