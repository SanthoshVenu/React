import { FOOD_IMG_URL } from "../../Utils/constants";

const ImageContainer = ({ imgData }) => {
  return (
    <div className="card">
      <img src={FOOD_IMG_URL + imgData.imageId}></img>
      <div>
        <ul>
          <li>{imgData.action.text}</li>
          <li>Food</li>
          <li>4* Rating</li>
          <li>30 Minutes ETA</li>
        </ul>
      </div>
    </div>
  );
};

//Higher Order Function.
// It takes Component as input.Enhances it, returns a modified component.
export const withPromotedLabel = (ImageContainer) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ImageContainer {...props} />
      </div>
    );
  };
};

export default ImageContainer;
