import { Box, Button, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "../components/DataTable";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddCarModal from "../components/AddCarModal";

const AdminCars = () => {
    const cars = useSelector((state) => state.cars);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const columns = [
        {
            field: "name",
            headerName: "Model",
            width: 200,
            valueGetter: (params) =>
                `${params.row.brand?.name} ${params.row?.name}`,
        },
        {
            field: "transmission",
            headerName: "Transmission",
            width: 130,
            sortable: false,
            valueGetter: (params) => params.row?.transmission?.toUpperCase(),
        },
        {
            field: "toning",
            headerName: "Tonned",
            width: 90,
            sortable: false,
            valueGetter: (params) => (params.row.toning ? "Yes" : "No"),
        },
        {
            field: "motor",
            headerName: "Motor",
            width: 80,
            sortable: false,
        },
        {
            field: "year",
            headerName: "Year",
            width: 100,
        },
        {
            field: "color",
            headerName: "Color",
            width: 110,
        },
        {
            field: "distance",
            headerName: "Distance",
            width: 130,
            valueGetter: (params) => `${params.row.distance} km`,
        },
        {
            field: "price",
            headerName: "Price",
            width: 110,
            valueGetter: (params) => `${params.row.price} $`,
        },
    ];
    return (
        <Paper sx={{ padding: 2, flex: 1 }} elevation={5}>
            <Box display={"flex"} justifyContent={"space-between"} mb={2}>
                <Typography variant="h5">Cars</Typography>
                <Box display={"flex"} gap={3}>
                    <Button variant="contained">
                        <AddIcon />
                        <Typography>Add category</Typography>
                    </Button>
                    <Button onClick={handleOpen} variant="contained">
                        <AddIcon />
                        <Typography>Add Car</Typography>
                    </Button>
                </Box>
            </Box>
            <DataTable columns={columns} rows={cars} />
            <AddCarModal handleClose={handleClose} open={open} />
        </Paper>
    );
};

export default AdminCars;
