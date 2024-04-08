import { FOOD_IMG_URL } from "../Utils/contants";

const ImageContainer = ({ imgData }) => {
  return (
    <div className="card">
      {console.log(imgData)}
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

export default ImageContainer;
