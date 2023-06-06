import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
    return (
        <div style={{ height: 470, width: "100%" }}>
            {rows?.length > 0 ? (
                <DataGrid
                    sx={{ m: 2 }}
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row._id}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            ) : (
                <div>No Data</div>
            )}
        </div>
    );
}
