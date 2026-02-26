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
        handle: { title: "Welcome," }
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
        handle: { title: "Portfolio" }
      }
    ]

  }
]);

function App() {

  return < RouterProvider router={router} />;

}

export default App
