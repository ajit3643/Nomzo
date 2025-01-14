import Restaurant from "./Restaurant";
import { useState } from "react";
import "./style.css";
import resList from "../../utils/mockData";
const Body = () => {
  const [listOfRestaurant, setResList] = useState(resList);
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurant" />
        <button
          className="filter-btn"
          onClick={() => {
            const filterdRestList = listOfRestaurant.filter((res) => {
              return res.info.avgRating > 4;
            });
            setResList(filterdRestList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => {
          return <Restaurant key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
