import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import DashbaordPage from "./features/dashboard/DashboardPage";
import PortfolioPage from "./features/portfolio/PortfolioPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashbaordPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      }
    ]

  }
]);

function App() {

  return < RouterProvider router={router} />;

}

export default App
