import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <Box component={"main"}>
            <Box display={"flex"}>
                <NavBar />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        backgroundColor: "#e3e3e3",
                        width: "100%",
                        p: 3,
                        pt: 10,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default Admin;
