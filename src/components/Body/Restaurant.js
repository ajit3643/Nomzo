import { CDN_URL } from "../../utils/constants";
import "./style.css";
const Restaurant = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="restaurant">
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="restaurant-details">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} Stars</p>
        <p>{costForTwo}</p>
        <h5>{sla?.slaString}</h5>
      </div>
    </div>
  );
};
export default Restaurant;
