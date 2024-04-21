import { FOOD_IMG_URL } from "../../Utils/constants";
import { useContext } from "react";
import UserContext from "../../Utils/UserContext";

const ImageContainer = ({ imgData }) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="card">
      <img src={FOOD_IMG_URL + imgData.imageId}></img>
      <div>
        <ul>
          <li>{imgData.action.text}</li>
          <li>Food</li>
          <li>4* Rating</li>
          <li>30 Minutes ETA</li>
          <li>{loggedInUser}</li>
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
        <label className="relative top-8 right-2  m-2 p-2 rounded-lg font-bold bg-slate-700 text-slate-100">
          Promoted
        </label>
        <ImageContainer {...props} />
      </div>
    );
  };
};

export default ImageContainer;
