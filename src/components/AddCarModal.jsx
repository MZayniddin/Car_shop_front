import {
    Modal,
    Backdrop,
    Fade,
    Typography,
    Box,
    Button,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useState } from "react";
import { createCar } from "../actions/cars";

const initialState = {
    name: "",
    brand: "",
    toning: false,
    motor: "",
    year: "",
    color: "",
    distance: "",
    transmission: "",
    price: "",
    description: "",
    images: "",
};

const AddCarModal = ({ handleClose, open }) => {
    const [carData, setCarData] = useState(initialState);
    const brands = useSelector((state) => state.brands);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };
    const handleCreate = (e) => {
        e.preventDefault();
        console.log(carData.description);
        // const formData = new FormData();
        // formData.append("name", carData.name);
        // formData.append("brand", carData.brand);
        // formData.append("toning", carData.toning);
        // formData.append("motor", carData.motor);
        // formData.append("year", carData.year);
        // formData.append("distance", carData.distance);
        // formData.append("transmission", carData.transmission);
        // formData.append("price", carData.price);
        // formData.append("description", carData.description);
        // formData.append("image", carData.image);
        dispatch(createCar(carData));
    };

    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 3,
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box onSubmit={handleCreate} sx={modalStyle} component={"form"}>
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        mb={4}
                    >
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Add A New Car
                        </Typography>
                        <Button
                            onClick={() => handleClose()}
                            variant="outlined"
                        >
                            <CloseIcon />
                        </Button>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Input
                                handleChange={handleChange}
                                label="Car Name"
                                name="name"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="select-label">Brand</InputLabel>
                                <Select
                                    labelId="select-label"
                                    label="Brand"
                                    fullWidth
                                    name="brand"
                                    required
                                    onChange={handleChange}
                                >
                                    {brands.map(({ _id, name }) => (
                                        <MenuItem key={_id} value={_id}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Input
                                handleChange={handleChange}
                                type="text"
                                name="motor"
                                label="Motor"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Input
                                handleChange={handleChange}
                                type="number"
                                name="year"
                                label="Year"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Input
                                handleChange={handleChange}
                                type="text"
                                name="color"
                                label="Color"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Input
                                handleChange={handleChange}
                                type="number"
                                name="distance"
                                label="Distance"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="transmission-label">
                                    Transmission
                                </InputLabel>
                                <Select
                                    labelId="transmission-label"
                                    label="Transmission"
                                    fullWidth
                                    name="transmission"
                                    required
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Automatic">
                                        Automatic
                                    </MenuItem>
                                    <MenuItem value="Manual">Manual</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Input
                                handleChange={handleChange}
                                type="number"
                                name="price"
                                label="Price"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                onChange={handleChange}
                                multiline
                                rows={4}
                                name="description"
                                label="Description"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth sx={{ mb: 1 }}>
                                <InputLabel id="tonned-label">
                                    Tonned
                                </InputLabel>
                                <Select
                                    labelId="tonned-label"
                                    label="Tonned"
                                    fullWidth
                                    name="toning"
                                    required
                                    onChange={handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setCarData({
                                        ...carData,
                                        images: base64,
                                    })
                                }
                            />
                        </Grid>
                    </Grid>
                    <Button
                        onClick={handleCreate}
                        sx={{ mt: 2, ml: "auto", display: "flex" }}
                        variant="contained"
                    >
                        Create
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
};

export default AddCarModal;
