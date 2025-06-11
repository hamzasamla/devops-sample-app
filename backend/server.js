const express = require("express");
const app = express();
const port = 3000;

app.get("/api/time", (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
