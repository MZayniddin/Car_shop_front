import { Container, Paper, TextField, Typography } from "@mui/material";
import Form from "../components/Form";

const Auth = () => {
    return (
        <Container
            style={{ display: "grid", placeItems: "center", height: "100vh" }}
        >
            <Form />
        </Container>
    );
};

export default Auth;
