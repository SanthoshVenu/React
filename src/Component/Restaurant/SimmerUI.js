import { Image } from "react-shimmer";

const ShimmerUI = () => {
  return (
    <div>
      <Image width={350} height={120} style={{ objectFit: "cover" }}>
        Hello
      </Image>
      <Image width={350} height={120} style={{ objectFit: "cover" }} />
    </div>
  );
};

export default ShimmerUI;
