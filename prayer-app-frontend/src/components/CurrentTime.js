import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Typography variant="h6" sx={{ color: "#E8F5E9" }}>
      🕒 {currentTime.toLocaleTimeString()}
    </Typography>
  );
};

export default CurrentTime;
