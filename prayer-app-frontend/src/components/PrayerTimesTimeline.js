import React from "react";
import { Paper, Box, Typography, Divider } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const PrayerTimesTimeline = ({ prayerTimes }) => {
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
        🕌 Daily Prayer Schedule
      </Typography>

      <Timeline position="alternate">
        {prayers.map((prayer, index) => (
          <TimelineItem key={prayer.key}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: "#4CAF50",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                }}
              >
                {prayer.icon}
              </TimelineDot>
              {index < prayers.length - 1 && (
                <TimelineConnector sx={{ backgroundColor: "#66BB6A" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper
                sx={{
                  p: 2,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#E8F5E9", fontWeight: 600 }}
                  >
                    {prayer.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#4CAF50", fontWeight: "bold" }}
                  >
                    {prayerTimes[prayer.key]}
                  </Typography>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};

export default PrayerTimesTimeline;
