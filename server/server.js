require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./db/index");

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//get All Restaurants

app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    console.log(results);
    res.json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.error(err);
  }
});

//get a Restaurant

app.get("/api/v1/restaurants/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const results = await db.query("select * from restaurants where id = $1", [
      id,
    ]);
    console.log(results);
    res.json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.error(err);
  }
});

//create a Resturant

app.post("/api/v1/restaurants", async (req, res) => {
  let { name, location, price_range } = req.body;
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name,location,price_range) values ($1,$2,$3) returning *",
      [name, location, price_range]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//uptade Restaurants

app.put("/api/v1/restaurants/:id", async (req, res) => {
  let id = req.params.id;
  let { name, location, price_range } = req.body;
  try {
    const results = await db.query(
      "UPDATE restaurants SET name= $1 , location= $2, price_range = $3 where id = $4 returning *",
      [name, location, price_range, id]
    );
    console.log(results.rows);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//delete Restaurants
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const results = await db.query(
      "DELETE FROM restaurants WHERE id = $1 returning *",
      [id]
    );
    console.log(results.rows);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log("server is open");
});
