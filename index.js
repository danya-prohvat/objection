const express = require("express");
const dbSetup = require("./db/db-setup");
const User = require("./db/models/user");

dbSetup();

const app = express();
app.use(express.json());

app.get("/user/:id", async (req, res, next) => {
  const { id } = req.params;

  const user = await User.query().findById(id).withGraphFetched("channel");

  res.json(user);
});

app.listen(8080, () => console.log("Server started!"));
