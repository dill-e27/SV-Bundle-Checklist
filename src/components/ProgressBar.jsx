// src/components/ProgressBar.jsx
function ProgressBar({ percent, onReset }) {
  return (
    <div className="progress-box"
      style={{
        position: 'fixed',
        top: '1vw',
        left: '1vw',
        fontSize: '1.5vw',
        background: 'rgb(233, 177, 103)',
        padding: '0.5em 1em',
        borderRadius: '16px',
        border: '4px solid #6c330b',
        zIndex: 10
      }}
    >
      <div className="progress-container">Progress: {percent}%</div>
      <button
        onClick={onReset}
        className="refresh-button"
        style={{
          marginTop: '0.5em',
          padding: '0.3em 0.8em',
          fontSize: '1vw',
          cursor: 'pointer',
          backgroundColor: '#e67e22',
          border: 'none',
          borderRadius: '5px',
          color: 'white'
        }}
      >
        Refresh
      </button>
    </div>
  );
}

export default ProgressBar;
