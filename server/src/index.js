// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
  connectionString: config.databaseUrl + "&uselibpqcompat=true",
  ssl: true
});

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// 1. getAllFoodTrucks()
async function getAllFoodTrucks() {
  const result = await db.query("SELECT * FROM food_trucks");
  return result.rows;
}

// 2. getFoodTruckById(id)
async function getFoodTruckById(id) {
  const result = await db.query("SELECT * FROM food_trucks WHERE id = $1", [id]);
  return result.rows[0];
}

// 3. getVeganFoodTrucks()
async function getVeganFoodTrucks() {
  const result = await db.query("SELECT * FROM food_trucks WHERE has_vegan_options = true");
  return result.rows;
}

// 4. getFoodTrucksByPrice(price)
async function getFoodTrucksByPrice(price) {
  const result = await db.query("SELECT * FROM food_trucks WHERE price_level = $1", [price]);
  return result.rows;
}

// 5. getTopRatedFoodTrucks()
async function getTopRatedFoodTrucks() {
  const result = await db.query("SELECT * FROM food_trucks WHERE rating >= 4.5");
  return result.rows;
}

// 6. getFoodTrucksSortedByRating()
async function getFoodTrucksSortedByRating() {
  const result = await db.query("SELECT * FROM food_trucks ORDER BY rating DESC");
  return result.rows;
}

// 7. addOneFoodTruck(name, current_location, daily_special, slogan, has_vegan_options)
async function addOneFoodTruck(name, current_location, daily_special, slogan, has_vegan_options) {
  const result = await db.query(
    `INSERT INTO food_trucks 
     (name, current_location, daily_special, slogan, has_vegan_options) 
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [name, current_location, daily_special, slogan, has_vegan_options]
  );
  return result.rows[0];
}

// 8. deleteOneFoodTruck(id)
async function deleteOneFoodTruck(id) {
  const result = await db.query("DELETE FROM food_trucks WHERE id = $1 RETURNING *", [id]);
  return result.rows[0];
}

// 9. updateFoodTruckLocation(id, newLocation)
async function updateFoodTruckLocation(id, newLocation) {
  const result = await db.query(
    "UPDATE food_trucks SET current_location = $1 WHERE id = $2 RETURNING *",
    [newLocation, id]
  );
  return result.rows[0];
}

// 10. updateFoodTruckRating(id, newRating)
async function updateFoodTruckRating(id, newRating) {
  const result = await db.query(
    "UPDATE food_trucks SET rating = $1 WHERE id = $2 RETURNING *",
    [newRating, id]
  );
  return result.rows[0];
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// 1. GET /get-all-food-trucks
app.get("/get-all-food-trucks", async (req, res) => {
  const trucks = await getAllFoodTrucks();
  res.json(trucks);
});

// 2. GET /get-food-truck-by-id/:id
app.get("/get-food-truck-by-id/:id", async (req, res) => {
  const id = req.params.id;
  const truck = await getFoodTruckById(id);
  res.json(truck);
});

// 3. GET /get-vegan-food-trucks
app.get("/get-vegan-food-trucks", async (req, res) => {
  const trucks = await getVeganFoodTrucks();
  res.json(trucks);
});

// 4. GET /get-food-trucks-by-price/:price
app.get("/get-food-trucks-by-price/:price", async (req, res) => {
  const price = parseInt(req.params.price);
  const trucks = await getFoodTrucksByPrice(price);
  res.json(trucks);
});

// 5. GET /get-top-rated-food-trucks
app.get("/get-top-rated-food-trucks", async (req, res) => {
  const trucks = await getTopRatedFoodTrucks();
  res.json(trucks);
});

// 6. GET /get-food-trucks-sorted-by-rating
app.get("/get-food-trucks-sorted-by-rating", async (req, res) => {
  const trucks = await getFoodTrucksSortedByRating();
  res.json(trucks);
});

// 7. POST /add-one-food-truck
app.post("/add-one-food-truck", async (req, res) => {
  const { name, current_location, daily_special, slogan, has_vegan_options } = req.body;
  const truck = await addOneFoodTruck(name, current_location, daily_special, slogan, has_vegan_options);
  res.json(truck);
});

// 8. POST /delete-one-food-truck/:id
app.post("/delete-one-food-truck/:id", async (req, res) => {
  const id = req.params.id;
  const truck = await deleteOneFoodTruck(id);
  res.json(truck);
});

// 9. POST /update-food-truck-location
app.post("/update-food-truck-location", async (req, res) => {
  const { id, newLocation } = req.body;
  const truck = await updateFoodTruckLocation(id, newLocation);
  res.json(truck);
});

// 10. POST /update-food-truck-rating
app.post("/update-food-truck-rating", async (req, res) => {
  const { id, newRating } = req.body;
  const truck = await updateFoodTruckRating(id, newRating);
  res.json(truck);
});