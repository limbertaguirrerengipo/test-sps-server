const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(express.json()); 
app.use(cors());

app.use(routes);
const puerto = process.env.PORT || 3001; 


app.listen(puerto, () => {
  console.log("Server is running", puerto);
});
