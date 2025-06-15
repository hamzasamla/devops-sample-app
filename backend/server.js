const express = require("express");
const app = express();
const port = 3000;

// Existing time endpoint
app.get("/api/time", (req, res) => {
  res.json({ time: new Date().toISOString() });
});

// New endpoint for server info (optional)
app.get("/api/info", (req, res) => {
  res.json({
    serverId: process.env.HOSTNAME || 'unknown',
    region: process.env.AWS_REGION || 'local',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});