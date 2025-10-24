import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const PrayerCard = ({ name, time, icon, isCurrent }) => {
  return (
    <Card
      sx={{
        transition: "all 0.3s ease",
        transform: isCurrent ? "scale(1.05)" : "scale(1)",
        border: isCurrent ? "2px solid #4CAF50" : "none",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(46, 125, 50, 0.4)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center", py: 3 }}>
        <Typography variant="h2" sx={{ mb: 1, fontSize: "2.5rem" }}>
          {icon}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, color: "#E8F5E9" }}
        >
          {name}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#4CAF50",
            mt: 1,
          }}
        >
          {time}
        </Typography>
        {isCurrent && (
          <Box
            sx={{
              mt: 1,
              px: 2,
              py: 0.5,
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "12px",
              display: "inline-block",
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              Current Prayer
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PrayerCard;
