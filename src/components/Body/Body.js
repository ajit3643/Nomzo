import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";

const Body = () => {
  // State variables
  const [listOfRestaurant, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1); // Current page number
  const [hasMore, setHasMore] = useState(true); // Whether more data is available

  // Use Effect to fetch the first batch of data
  useEffect(() => {
    fetchData();
  }, [page]);

  // Function to fetch restaurant data
  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4746598&lng=77.12934249999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${page}`
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      if (restaurants.length === 0) {
        setHasMore(false); // Stop fetching if no more data
        return;
      }

      setResList((prev) => [...prev, ...restaurants]); // Append new restaurants to the existing list
      setFilteredRestaurant((prev) => [...prev, ...restaurants]); // Update filtered list
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Filter search function
  const handleSearch = () => {
    const filtered = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Filter Section */}
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurant"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="filter-buttons">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRestList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredRestList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Infinite Scroll for Restaurant List */}
      <InfiniteScroll
        dataLength={filteredRestaurant.length} // Total items rendered so far
        next={() => setPage((prev) => prev + 1)} // Fetch next page
        hasMore={hasMore} // Check if more data is available
        loader={
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <Shimmer />
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center", margin: "20px 0" }}>
            <b>Yay! You've seen it all!</b>
          </p>
        }
      >
        <div className="restaurant-container">
          {filteredRestaurant.map((restaurant) => (
            <Restaurant key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Body;
