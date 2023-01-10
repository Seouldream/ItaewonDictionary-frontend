export default function CategoryCheckBox({
  category, handleClickCheck,
}) {
  const handleClick = () => {
    handleClickCheck(category.id);
  };

  const tag = `input-${category.name}`;
  return (
    <li>
      <label htmlFor={tag}>
        {category.name}
      </label>
      <input
        id={tag}
        type="checkbox"
        onClick={handleClick}
      />
    </li>
  );
}
