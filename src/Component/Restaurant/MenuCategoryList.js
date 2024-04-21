import SubCategories from "./SubCategroies";

const MenuCategoryList = ({ cardData }) => {
  console.log("MenuCategoryList", cardData);
  const { title, categories } = cardData;
  return (
    <div>
      <span>{title}</span>
      <div>
        {categories?.map((category) => (
          <SubCategories key={category?.title} subCategory={category} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryList;
