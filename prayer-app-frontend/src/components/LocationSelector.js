import React, { useState } from "react";
import { Paper, TextField, Button, Box, Typography } from "@mui/material";

const LocationSelector = ({ location, onLocationChange }) => {
  const [localLocation, setLocalLocation] = useState(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationChange(localLocation);
  };

  return (
    <Paper
      sx={{
        p: 3,
        background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ color: "white", mb: 2 }}>
        🎯 Select Location
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
      >
        <TextField
          label="City"
          value={localLocation.city}
          onChange={(e) =>
            setLocalLocation((prev) => ({ ...prev, city: e.target.value }))
          }
          sx={{
            flexGrow: 1,
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "#4CAF50",
              },
              "&:hover fieldset": {
                borderColor: "#66BB6A",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#A5D6A7",
            },
          }}
        />
        <TextField
          label="Country"
          value={localLocation.country}
          onChange={(e) =>
            setLocalLocation((prev) => ({ ...prev, country: e.target.value }))
          }
          sx={{
            flexGrow: 1,
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "#4CAF50",
              },
              "&:hover fieldset": {
                borderColor: "#66BB6A",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#A5D6A7",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#4CAF50",
            "&:hover": {
              backgroundColor: "#66BB6A",
            },
            px: 4,
          }}
        >
          Update
        </Button>
      </Box>
    </Paper>
  );
};

export default LocationSelector;
