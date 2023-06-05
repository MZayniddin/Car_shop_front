import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth />,
    },
]);

export default router;
