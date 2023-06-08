import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import AdminCars from "../pages/AdminCars";
import AdminUsers from "../pages/AdminUsers";

const roles = JSON.parse(localStorage.getItem("profile"))?.result?.roles;

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "admin",
                element: roles?.Admin ? (
                    <Admin />
                ) : (
                    <Navigate to="/auth" replace />
                ),
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "cars",
                        element: <AdminCars />,
                    },
                    {
                        path: "users",
                        element: <AdminUsers />,
                    },
                ],
            },
        ],
    },

    {
        path: "/auth",
        element: <Auth />,
    },
]);

export default router;
