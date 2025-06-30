import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Body = () => {
  const [listOfRestaurant, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1); // Current page number
  const [hasMore, setHasMore] = useState(true); // Whether more data is available

  // Fetch data when the component mounts or page changes
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api`
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      if (restaurants.length === 0) {
        setHasMore(false); // Stop fetching if no more data
        return;
      }

      setResList((prev) => [...prev, ...restaurants]); // Append to existing list
      setFilteredRestaurant((prev) => [...prev, ...restaurants]); // Update filtered list
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filtered = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100 min-h-screen">
      {/* Search Section */}
      <div className="bg-blue-500 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            className="w-full sm:w-3/4 border border-blue-300 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Search for restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="w-full sm:w-1/4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition-all"
            onClick={handleSearch}
          >
            🔍 Search
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-6 mt-4 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
            onClick={() => {
              const filteredRestList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredRestList);
            }}
          >
            🌟 Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Infinite Scroll for Restaurant List */}
      <InfiniteScroll
        dataLength={filteredRestaurant.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={
          <div className="text-center my-4">
            <Shimmer />
          </div>
        }
        endMessage={
          <p className="text-center my-4 font-semibold">
            Yay! You've seen it all!
          </p>
        }
      >
        {/* Restaurant Grid */}
        <div className="max-w-7xl mx-auto py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRestaurant.map((restaurant) => (
            <Restaurant key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Body;
