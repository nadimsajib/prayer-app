import React from "react";
import { Box, Paper, Typography, Grid, Card, CardContent } from "@mui/material";

const PrayerTimesRow = ({ prayerTimes }) => {
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
        p: 3,
        background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
        borderRadius: "16px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "white", mb: 3, textAlign: "center" }}
      >
        🕌 Today's Prayer Times
      </Typography>

      <Grid container spacing={2}>
        {prayers.map((prayer) => (
          <Grid item xs={6} sm={4} md={2} key={prayer.key}>
            <Card
              sx={{
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  background: "rgba(255, 255, 255, 0.15)",
                },
              }}
            >
              <CardContent sx={{ py: 2 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {prayer.icon}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#E8F5E9", fontWeight: 600 }}
                >
                  {prayer.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#4CAF50", fontWeight: "bold", mt: 1 }}
                >
                  {prayerTimes[prayer.key]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PrayerTimesRow;
