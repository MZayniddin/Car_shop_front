import { Paper, Typography } from "@mui/material";
import { useState } from "react";

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

    const handleShowPassword = () => setShowPassword((state) => !state);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };
    return (
        <Paper sx={{ width: "100%", maxWidth: "500px", padding: "25px" }}>
            <Typography variant="h5" mb={2} textAlign={"center"}>
                Sign In
            </Typography>
        </Paper>
    );
};

export default Form;
