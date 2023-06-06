import { Box, Paper, Typography, Button } from "@mui/material";
import { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp, signIn } from "../actions/auth";

const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleShowPassword = () => setShowPassword((state) => !state);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signUp(formData, navigate));
        } else {
            dispatch(signIn(formData, navigate));
        }
    };

    return (
        <Paper sx={{ width: "100%", maxWidth: "500px", padding: "25px" }}>
            <Typography variant="h5" mb={2} textAlign={"center"}>
                Sign {isSignUp ? "Up" : "In"}
            </Typography>
            <Box
                component={"form"}
                onSubmit={handleSubmit}
                display={"flex"}
                flexDirection={"column"}
                gap={3}
            >
                {isSignUp && (
                    <Input
                        name="username"
                        label="Username"
                        type="text"
                        handleChange={handleChange}
                    />
                )}
                <Input
                    name="email"
                    type="email"
                    label="Email"
                    handleChange={handleChange}
                />
                <Input
                    name="password"
                    handleChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    handleShowPassword={handleShowPassword}
                />
                {isSignUp && (
                    <Input
                        name="confirmPassword"
                        label="Repeat Password"
                        handleChange={handleChange}
                        type="password"
                    />
                )}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
                <Button onClick={switchMode}>
                    {isSignUp
                        ? "Already have an account? Sign In"
                        : "Don't have an account? Sign Up"}
                </Button>
            </Box>
        </Paper>
    );
};

export default Form;
