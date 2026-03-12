import { useState, useEffect } from "react";
import "../App.css";

function Home() {
  const [foodTrucks, setFoodTrucks] = useState(null);

  const getAllFoodTrucks = async () => {
    const response = await fetch("/api/get-all-food-trucks");
    const data = await response.json();
    console.log(data);
    setFoodTrucks(data);
  };

  useEffect(() => {
    getAllFoodTrucks();
  }, []);

  return (
    <>
      <h1>All Food Trucks</h1>
      <div className="food-trucks">
        {foodTrucks?.map((truck) => (
          <div className="food-truck" key={truck.id}>
            <h2>{truck.name}</h2>
            <div className="info-row">
              <span className="label">Id:</span>{" "}
              <span className="value">{truck.id}</span>
            </div>
            <div className="info-row">
              <span className="label">Location:</span>{" "}
              <span className="value">{truck.current_location}</span>
            </div>
            <div className="info-row">
              <span className="label">Daily Special:</span>{" "}
              <span className="value">{truck.daily_special}</span>
            </div>
            <div className="info-row">
              <span className="label">Slogan:</span>{" "}
              <span className="value">{truck.slogan}</span>
            </div>
            <div className="info-row">
              <span className="label">Has Vegan Options:</span>{" "}
              <span className="value">
                {truck.has_vegan_options ? "Yes ✅" : "No ❌"}
              </span>
            </div>
            <div className="info-row">
              <span className="label">Price Level:</span>{" "}
              <span className="value">{truck.price_level}</span>
            </div>
            <div className="info-row">
              <span className="label">Rating:</span>{" "}
              <span className="value">{truck.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
