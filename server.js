const express = require("express");
const cors = require("cors");
const path = require("path");
 
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use(express.static(path.join(__dirname, "public")));
 
const db = require("./app/models");
 
db.sequelize.sync()
  .then(() => {
    console.log("Database synced.");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });
 
require("./app/routes/turorial.routes")(app);
 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
 
const PORT = process.env.PORT || 8080;
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
 
