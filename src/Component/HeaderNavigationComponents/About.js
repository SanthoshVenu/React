import UserClass from "../ClassComponent/UserClass.js";
import { useContext } from "react";
import UserContext from "../../Utils/UserContext";

export default About = () => {
  //// const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      {/* <div className="font-bold py-4 ">{loggedInUser}</div> */}
      This is the official swiggy page.
      <UserClass name={"Santhosh Ganga"} />
    </div>
  );
};
