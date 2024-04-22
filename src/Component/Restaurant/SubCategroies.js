import AccordianMenu from "./AccoridianMenu";

const SubCategories = ({ subCategory }) => {
  const { title, itemCards } = subCategory;
  return (
    <div>
      <span>{title}</span>
      <div>
        {itemCards?.map((item) => (
          <AccordianMenu itemData={item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default SubCategories;
