import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Typography,
    Tooltip,
    Menu,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
    const { pathname } = useLocation();
    const isAdminRoute = pathname === "/admin";
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile")) || null
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const settings = ["Profile", "Image", "Logout"];
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleUserMenu = (e) => {
        if (e.target.textContent === "Logout") logout();
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        setUser(null);
    };

    return (
        <AppBar color="default">
            <Container
                sx={{
                    padding: "10px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    to={isAdminRoute ? "/" : "/admin"}
                    component={Link}
                    variant="contained"
                >
                    {isAdminRoute ? <ArrowBackIcon /> : <PersonIcon />}
                    <Typography textTransform={"capitalize"} ml={1}>
                        {isAdminRoute ? "Back to Home" : "Go to Admin"}
                    </Typography>
                </Button>
                <Box>
                    {user ? (
                        <Box>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        sx={{ background: "dodgerblue" }}
                                        alt={user.user?.username}
                                        src={user.user?.image}
                                    >
                                        {user.user?.username.charAt(0)}
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleUserMenu}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    ) : (
                        // <Box display={"flex"} alignItems={"center"} gap={3}>
                        //     {/* <Button
                        //         variant="contained"
                        //         color="error"
                        //         onClick={logout}
                        //         >
                        //         Logout
                        //     </Button> */}
                        //     <Typography variant="h6">
                        //         {user.user?.username}
                        //     </Typography>
                        //     <Avatar
                        //         alt={user.user?.username}
                        //         src={user.user?.image}
                        //     >
                        //     </Avatar>
                        // </Box>
                        <Button to="/auth" component={Link} variant="contained">
                            Sign in
                        </Button>
                    )}
                </Box>
            </Container>
        </AppBar>
    );
};

export default Header;
