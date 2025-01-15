import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import "./style.css";
const Body = () => {
  // Use state variable
  const [listOfRestaurant, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // Use Effect function take two arguments
  useEffect(() => {
    fetchData();
  }, []);

  // fetch Data from API

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4746598&lng=77.12934249999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional chaning
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurant"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-buttons">
          <button
            className="filter-btn"
            onClick={() => {
              const filterdRestList = listOfRestaurant.filter((res) => {
                res.info.avgRating > 4;
              });
              setResList(filterdRestList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => {
          return <Restaurant key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
