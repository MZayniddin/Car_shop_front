import { Box, Paper, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupIcon from "@mui/icons-material/Group";
import { NavLink } from "react-router-dom";

const inActiveLink = {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "5px",
    color: "black",
    padding: "5px 10px",
};

const activeLink = {
    ...inActiveLink,
    background: "dodgerblue",
    color: "white",
};

const NavBar = () => {
    const NavBarItem = ({ icon, name, direction }) => {
        return (
            <Box
                component={NavLink}
                to={direction}
                style={({ isActive }) => (isActive ? activeLink : inActiveLink)}
            >
                {icon}
                <Typography variant="h6">{name}</Typography>
            </Box>
        );
    };
    return (
        <Paper
            elevation={2}
            sx={{
                height: "100vh",
                width: "250px",
                p: 2,
                pt: 10,
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <NavBarItem
                icon={<HomeIcon />}
                name="Dashboard"
                direction="/admin/dashboard"
            />
            <NavBarItem
                icon={<DirectionsCarIcon />}
                name={"Cars"}
                direction="/admin/cars"
            />
            <NavBarItem
                icon={<GroupIcon />}
                name={"Users"}
                direction="/admin/users"
            />
        </Paper>
    );
};

export default NavBar;
