// src/components/BundleSection.jsx
function BundleSection({ bundleName, items, checkedItems, setCheckedItems }) {
  return (
    <div className="bundle" id={bundleName.replace(/\s+/g, '-')}>
      <h2>{bundleName}</h2>
      {items.map(item => {
        const key = `${bundleName}-${item.id}`;
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
              src={`${import.meta.env.BASE_URL}images/Items/${item.image}`}
              alt={item.name}
              className="item-image"
            />
          </div>
        );
      })}
    </div>
  );
}

export default BundleSection;