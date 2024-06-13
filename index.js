const express = require('express');
const app = express();

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pages/index.html");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})