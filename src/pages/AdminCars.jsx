import { Box, Button, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "../components/DataTable";
import { useSelector } from "react-redux";

const AdminCars = () => {
    const cars = useSelector((state) => state.cars);
    console.log(cars);
    const columns = [
        {
            field: "name",
            headerName: "Model",
            width: 200,
            valueGetter: (params) =>
                `${params.row.brand.name} ${params.row.name}`,
        },
        {
            field: "transmission",
            headerName: "Transmission",
            width: 130,
            sortable: false,
            valueGetter: (params) => params.row.transmission.toUpperCase(),
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
            valueGetter: (params) => `${params.row.distance} km`
        },
        {
            field: "price",
            headerName: "Price",
            width: 110,
            valueGetter: (params) => `${params.row.price} $`
        },
    ];

    const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
                    <Button variant="contained">
                        <AddIcon />
                        <Typography>Add Car</Typography>
                    </Button>
                </Box>
            </Box>
            <DataTable columns={columns} rows={cars} />
        </Paper>
    );
};

export default AdminCars;
