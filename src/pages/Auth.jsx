import { Container } from "@mui/material";
import Form from "../components/Form";

const Auth = () => {
    return (
        <Container
            component={"main"}
            style={{ display: "grid", placeItems: "center", height: "100vh" }}
        >
            <Form />
        </Container>
    );
};

export default Auth;
