require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

//get All Restaurants

app.get("/api/v1/restaurants", (req, res) => {
  res.json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

//get a Restaurant

app.get("/api/v1/restaurants/:restaurantid", (req, res) => {
  console.log(req.params);
});

//create a Resturant

app.post("/api/v1/restaurants", (req, res) => {
  let { name } = req.body;
  console.log(name);
  res.send("blabla");
});

//uptade Restaurants

app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
});

//delete Restaurants
app.delete("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
});

app.listen(port, () => {
  console.log("server is open");
});
