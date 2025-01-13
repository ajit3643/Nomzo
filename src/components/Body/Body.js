import Restaurant from "./Restaurant";
import "./style.css";

import resList from "../../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurant" />
        <button>Search</button>
      </div>

      <div className="restaurant-container">
        {resList.map((restaurant) => {
          return <Restaurant key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
