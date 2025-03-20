import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

const projects = JSON.parse(fs.readFileSync("./projects.json", "utf-8"));

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 5050;  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));