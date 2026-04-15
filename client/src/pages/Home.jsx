import { useEffect, useState } from "react"; //importing the react hooks..
import "../App.css";

// This function is a react component...
function Home() {
  const [trucks, setTrucks] = useState([]); //useState will store all the trucks data from api..

  // this runs data once the page loads
  useEffect(() => {
    fetch("/api/get-all-food-trucks") //fetching data from the backend api..
      .then((res) => res.json()) //converts response into JSON
      .then((data) => setTrucks(data)) //saves data into state
      .catch((error) => console.log(error)); //logs any errors
  }, []); //empty array = runs only once when page loads..

  return (
    <div>
      <h1>All Food Trucks</h1>
      {/* total count of trucks.. */}
      <p>Total number of food trucks: {trucks.length}</p>
      
      {/* cards container */}
      <div className="card-container">
        {trucks.map((truck) => ( //loops through each truck to display it..
          // displays each truck/info
          <div key={truck.id} className="card"> 
            <h3>{truck.name}</h3>
            <p>Id: {truck.id}</p>
            <p><strong>Location:</strong> {truck.current_location}</p>
            <p><strong>Daily Special:</strong> {truck.daily_special}</p>
            <p><strong>Slogan:</strong> {truck.slogan}</p>
            {/* checks to see if vegan options are true/false */}
            <p><strong>Has Vegan Option:</strong> {truck.has_vegan_options ? "Yes✅" : "No❌"}</p> 
            <p><strong>Price Level:</strong> {truck.price_level}</p>
            <p><strong>Rating:</strong> {truck.rating}</p>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Home; //exports component so app.jsx can use it.. 

// useState = stores the data from the api so we can use in the component..
// useEffect = runs the fetch when the page loads so we can get the data..
// the fetch is making the request to our backend to get all the food trucks..
// .map() = looping through each truck and creates a card for each..
// key ={truck.id} = react needs a unique key to track each item in the list..

// SOOOO.... the data flows from the backend api into state, and then react renders it dynamically usind map
