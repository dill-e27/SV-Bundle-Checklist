// src/components/TOCSidebar.jsx
function TOCSidebar({ bundles, onClose }) {
  return (
    <div className="toc-sidebar"
      style={{
        position: 'fixed',
        right: '1vw',
        width: '20%',
        maxHeight: '90vh',
        overflowY: 'auto',
        backgroundColor: '#fff',
        border: '2px solid #6c330b',
        borderRadius: '10px',
        padding: '1em',
        zIndex: 9
      }}
    >
      <h3>Bundles</h3>
      <ul>
        {bundles.map(([bundle]) => (
          <li key={bundle}>
            <a
              href={`#${bundle.replace(/\s+/g, '-')}`}
              onClick={onClose}
            >
              {bundle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TOCSidebar;
