const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/ticketing_system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("users", UserSchema);

app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
