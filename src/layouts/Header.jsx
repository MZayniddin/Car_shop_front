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
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { updateUser } from "../actions/auth";

const Header = () => {
    const { pathname } = useLocation();
    const isAdminRoute = pathname.includes("/admin");
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile")) || null
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const logout = useCallback(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        setUser(null);
        setIsAdmin(false);
    }, [dispatch, navigate]);

    const handleImage = (e) => {
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        dispatch(updateUser(formData, user?.result?._id));
    };

    useEffect(() => {
        const token = user?.accessToken;
        if (token) {
            try {
                const decodedToken = decode(token);
                if (decodedToken.UserInfo.roles.includes(5150))
                    setIsAdmin(true);

                if (decodedToken.exp * 1000 < new Date().getTime()) logout();
            } catch (error) {
                console.log(error);
            }
        }
    }, [user, isAdmin, logout]);

    return (
        <AppBar  color="default">
            <Container
                sx={{
                    padding: "10px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {isAdmin && (
                    <Button
                        to={isAdminRoute ? "/" : "/admin/dashboard"}
                        component={Link}
                        variant="contained"
                    >
                        {isAdminRoute ? <ArrowBackIcon /> : <PersonIcon />}
                        <Typography textTransform={"capitalize"} ml={1}>
                            {isAdminRoute ? "Back to Home" : "Go to Admin"}
                        </Typography>
                    </Button>
                )}
                <Box ml={"auto"}>
                    {user ? (
                        <Box display={"flex"} alignItems={"center"} gap={3}>
                            <Typography variant="h6">
                                {user.result?.username}
                            </Typography>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        sx={{ background: "dodgerblue" }}
                                        alt={user.result?.username}
                                        src={user.result?.image}
                                    >
                                        {user.result?.username
                                            ? user.result?.username.charAt(0)
                                            : user.result?.email.charAt(0)}
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
                                <MenuItem onClick={handleUserMenu}>
                                    <Typography
                                        component={"label"}
                                        htmlFor="input-file"
                                        textAlign="center"
                                    >
                                        Image
                                    </Typography>
                                    <input
                                        onChange={handleImage}
                                        accept="image/png, image/jpg, image/jpeg"
                                        style={{ display: "none" }}
                                        id="input-file"
                                        type="file"
                                    />
                                </MenuItem>
                                <MenuItem onClick={logout}>
                                    <Typography textAlign="center">
                                        Logout
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    ) : (
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
