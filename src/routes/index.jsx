import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

const roles = JSON.parse(localStorage.getItem("profile"))?.result.roles;

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/admin",
                element: roles?.Admin ? (
                    <Admin />
                ) : (
                    <Navigate to="/auth" replace />
                ),
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth />,
    },
]);

export default router;
