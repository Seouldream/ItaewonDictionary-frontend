export default function CategoryAdmin({
  category, navigateToCategoryDetails,
}) {
  const handleClickCategory = () => {
    // ToDo 클릭시 ????
    navigateToCategoryDetails(category.id);
  };
  return (
    <li>
      <button type="button" onClick={handleClickCategory}>
        {category.name}
      </button>
    </li>
  );
}
