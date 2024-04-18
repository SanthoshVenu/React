import ImageContainer, { withPromotedLabel } from "./ImageContainer";
import { Link } from "react-router-dom";

const PromotedRestaurant = withPromotedLabel(ImageContainer);

const RestaurantCard = ({ cardData, OnEverChange }) => {
  const { header, imageGridCards } = cardData;
  return (
    <div>
      <div className="header-title">
        <h1>{header?.title}</h1>
      </div>
      <div className="card-container">
        {imageGridCards?.info?.map((imageData) => (
          <Link key={imageData?.id} to={"/restaurant/" + imageData?.id}>
            {imageData?.id % 2 == 0 ? (
              <ImageContainer imgData={imageData} />
            ) : (
              <PromotedRestaurant imgData={imageData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
