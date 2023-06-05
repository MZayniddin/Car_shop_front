import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const { pathname } = useLocation();
    const isAdminRoute = pathname === "/admin";
    const [user, setUser] = useState(false);
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
                        <Avatar />
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
