import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const PrayerTimesTable = ({ prayerTimes }) => {
  const prayers = [
    { name: "Fajr", key: "fajr", icon: "🌅" },
    { name: "Sunrise", key: "sunrise", icon: "☀️" },
    { name: "Dhuhr", key: "dhuhr", icon: "🌞" },
    { name: "Asr", key: "asr", icon: "🌇" },
    { name: "Maghrib", key: "maghrib", icon: "🌆" },
    { name: "Isha", key: "isha", icon: "🌙" },
  ];

  return (
    <Paper
      sx={{
        background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "white",
          p: 3,
          textAlign: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        🕌 Prayer Times Schedule
      </Typography>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="prayer times table">
          <TableHead>
            <TableRow sx={{ background: "rgba(0, 0, 0, 0.2)" }}>
              <TableCell
                sx={{
                  color: "#E8F5E9",
                  fontWeight: "bold",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                Prayer
              </TableCell>
              <TableCell
                sx={{
                  color: "#E8F5E9",
                  fontWeight: "bold",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                Time
              </TableCell>
              <TableCell
                sx={{
                  color: "#E8F5E9",
                  fontWeight: "bold",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prayers.map((prayer) => (
              <TableRow
                key={prayer.key}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  transition: "background 0.3s ease",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                <TableCell sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                  <Typography
                    sx={{
                      color: "#E8F5E9",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{prayer.icon}</span>
                    {prayer.name}
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#4CAF50", fontWeight: "bold" }}
                  >
                    {prayerTimes[prayer.key]}
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                  <Typography
                    sx={{
                      color: "#A5D6A7",
                      fontStyle: "italic",
                      fontSize: "0.875rem",
                    }}
                  >
                    Upcoming
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PrayerTimesTable;
