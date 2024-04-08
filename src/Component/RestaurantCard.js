import ImageContainer from "./ImageContainer";

const RestaurantCard = ({ cardData, OnEverChange }) => {
  const { header, imageGridCards } = cardData;
  return (
    <div>
      <div className="header-title">
        <h1>{header.title}</h1>
      </div>
      <div className="card-container">
        {imageGridCards.info.map((imageData) => (
          <ImageContainer key={imageData.id} imgData={imageData} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
