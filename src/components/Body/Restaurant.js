import { CDN_URL } from "../../utils/constants";
import "./style.css";
const Restaurant = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="restaurant">
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="restaurant-details">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} Stars</p>
        <p>{costForTwo}</p>
        <h5>{resData.info.sla.deliveryTime} minutes</h5>
      </div>
    </div>
  );
};
export default Restaurant;
