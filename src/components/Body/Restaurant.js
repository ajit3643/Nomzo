import { CDN_URL } from "../../utils/constants";

const Restaurant = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Image */}
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover"
      />

      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 truncate">
          {cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm font-medium text-green-600">{avgRating} ★</p>
          <p className="text-sm text-gray-500">{costForTwo}</p>
        </div>
        <p className="text-sm text-gray-500 mt-2">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default Restaurant;
