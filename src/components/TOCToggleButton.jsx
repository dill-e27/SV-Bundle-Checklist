// src/components/TOCToggleButton.jsx
function TOCToggleButton({ showTOC, toggleTOC }) {
  return (
    <button onClick={toggleTOC} className="toc-toggle">
      {showTOC ? '✖' : '☰'}
    </button>
  );
}

export default TOCToggleButton;
