import { useState } from "react";
import "../App.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    currentLocation: "",
    dailySpecial: "",
    slogan: "",
    hasVeganOptions: "",
    priceLevel: "",
    rating: "",
  });
  const [foodTruckData, setFoodTruckData] = useState(null);

  async function writeFoodTruckData(data) {
    await fetch("http://localhost:3000/add-one-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        currentLocation: data.current_location,
        dailySpecial: data.daily_special,
        slogan: data.slogan,
        hasVeganOptions: data.has_vegan_options,
        priceLevel: data.price_level,
        rating: data.rating,
      }),
    });
  }

  // Update the state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // send the data to the database via the API
    writeFoodTruckData(formData);

    // save the user's profile data into the state variable to be displayed in JSX
    setUserInfo(foodTruckData);

    // reset the form to empty state
    setFormData(emptyFormState);
  };

  return (
    <>
      <h1>Add Food Truck</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full name"
        ></input>
        <input
          type="text"
          name="bio"
          value={formData.currentLocation}
          onChange={handleInputChange}
          placeholder="Current Location"
        ></input>
        <input
          type="text"
          name="bio"
          value={formData.dailySpecial}
          onChange={handleInputChange}
          placeholder="Daily Special"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;

- [x]  [Ainslie](https://github.com/AinslieF/countries-app)
- [x]  [Babz](https://github.com/Babz-G/countries-app)
- [x]  [Haine](https://github.com/Haine88/countries-app)
- [x]  [Jackie](https://github.com/jaclyn16/countries-app)
- [x]  [Jenny](https://github.com/jennivonsta/countries-app)
- [x]  [Megan](https://github.com/meganirenegott/countries-app)
- [ ]  [Mimi](https://github.com/mimiiiren/countries-app)
- [x]  [Priscilla](https://github.com/RPMorrigan/countries-app)
- [ ]  [Stephanie](https://github.com/StepLeonard/countries-app)
- [ ]  [Tee](https://github.com/Tporterinbox/countries-app)