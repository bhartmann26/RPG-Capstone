app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});