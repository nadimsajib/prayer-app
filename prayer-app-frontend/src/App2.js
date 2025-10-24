import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { prayerTheme } from "./theme";
import PrayerTimesRow from "./components/PrayerTimesRow";
import PrayerTimesTable from "./components/PrayerTimesTable";
import PrayerTimesTimeline from "./components/PrayerTimesTimeline";
import LocationSelector from "./components/LocationSelector";
import CurrentTime from "./components/CurrentTime";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

function App() {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [location, setLocation] = useState({
    city: "Mecca",
    country: "Saudi Arabia",
  });
  const [layout, setLayout] = useState("cards"); // 'cards', 'table', 'timeline'

  const fetchPrayerTimes = async (city, country) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(`${API_BASE_URL}/prayer-times`, {
        params: { city, country },
      });
      setPrayerTimes(response.data);
    } catch (err) {
      setError("Failed to fetch prayer times");
      // Set mock data for development
      setPrayerTimes({
        date: new Date().toISOString().split("T")[0],
        fajr: "05:30",
        sunrise: "06:45",
        dhuhr: "12:30",
        asr: "15:45",
        maghrib: "18:15",
        isha: "19:30",
        city: city,
        country: country,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerTimes(location.city, location.country);
  }, [location]);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const handleLayoutChange = (event, newLayout) => {
    if (newLayout !== null) {
      setLayout(newLayout);
    }
  };

  const renderPrayerTimes = () => {
    if (!prayerTimes) return null;

    switch (layout) {
      case "cards":
        return <PrayerTimesRow prayerTimes={prayerTimes} />;
      case "table":
        return <PrayerTimesTable prayerTimes={prayerTimes} />;
      case "timeline":
        return <PrayerTimesTimeline prayerTimes={prayerTimes} />;
      default:
        return <PrayerTimesRow prayerTimes={prayerTimes} />;
    }
  };

  return (
    <ThemeProvider theme={prayerTheme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            🕌 Prayer Times
          </Typography>
          <CurrentTime />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <LocationSelector
              location={location}
              onLocationChange={handleLocationChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  📱 Choose Layout:
                </Typography>
                <ToggleButtonGroup
                  value={layout}
                  exclusive
                  onChange={handleLayoutChange}
                  aria-label="prayer times layout"
                >
                  <ToggleButton
                    value="cards"
                    aria-label="cards layout"
                    sx={{ color: "white", borderColor: "#4CAF50" }}
                  >
                    🃏 Cards
                  </ToggleButton>
                  <ToggleButton
                    value="table"
                    aria-label="table layout"
                    sx={{ color: "white", borderColor: "#4CAF50" }}
                  >
                    📊 Table
                  </ToggleButton>
                  <ToggleButton
                    value="timeline"
                    aria-label="timeline layout"
                    sx={{ color: "white", borderColor: "#4CAF50" }}
                  >
                    ⏰ Timeline
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Paper>
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Paper sx={{ p: 2, background: "#d32f2f" }}>
                <Typography sx={{ color: "white" }}>⚠️ {error}</Typography>
              </Paper>
            </Grid>
          )}

          {loading ? (
            <Grid item xs={12} sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" sx={{ color: "#4CAF50" }}>
                Loading prayer times...
              </Typography>
            </Grid>
          ) : (
            <Grid item xs={12}>
              {renderPrayerTimes()}
            </Grid>
          )}

          {prayerTimes && (
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 3,
                  background:
                    "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  📍 Location Information
                </Typography>
                <Typography variant="body1" sx={{ color: "#E8F5E9" }}>
                  {prayerTimes.city}, {prayerTimes.country}
                </Typography>
                <Typography variant="body2" sx={{ color: "#A5D6A7", mt: 1 }}>
                  Date:{" "}
                  {new Date(prayerTimes.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
