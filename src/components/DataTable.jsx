import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
    function generateRandom() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
    return (
        <div style={{ height: 470, width: "100%" }}>
            {rows?.length > 0 ? (
                <DataGrid
                    sx={{ m: 2 }}
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => generateRandom()}
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
