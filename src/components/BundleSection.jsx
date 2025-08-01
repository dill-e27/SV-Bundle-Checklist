{items.map(item => {
  const key = `${bundleName}-${item.id}`;
  const imagePath = `${import.meta.env.BASE_URL}images/${item.image}`;
  console.log(imagePath); // ✅ This will show each image path in the browser console

  return (
    <div key={key} className="item-row">
      <label className="item-text">
        <input
          type="checkbox"
          checked={!!checkedItems[key]}
          onChange={() =>
            setCheckedItems(prev => ({
              ...prev,
              [key]: !prev[key]
            }))
          }
        />
        <strong>{item.name}:</strong> {item.description}
      </label>
      <img
        src={imagePath}
        alt={item.name}
        className="item-image"
      />
    </div>
  );
})}
