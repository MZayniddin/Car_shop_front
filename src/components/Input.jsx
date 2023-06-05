import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Input = ({
    label,
    name,
    handleChange,
    autoFocus,
    type,
    handleShowPassword,
}) => {
    return (
        <TextField
            name={name}
            onChange={handleChange}
            label={label}
            variant="outlined"
            required
            fullWidth
            autoComplete="current-password"
            autoFocus={autoFocus}
            type={type}
            InputProps={
                name === "password"
                    ? {
                          endAdornment: (
                              <InputAdornment position="end">
                                  <IconButton onClick={handleShowPassword}>
                                      {type === "password" ? (
                                          <Visibility />
                                      ) : (
                                          <VisibilityOff />
                                      )}
                                  </IconButton>
                              </InputAdornment>
                          ),
                      }
                    : null
            }
        />
    );
};

export default Input;
