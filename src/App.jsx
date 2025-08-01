import { useState, useEffect } from 'react';
import './App.css';
import items from './items.json';
import groupByBundle from './data/groupByBundle';
import ProgressBar from './components/ProgressBar';
import TOCToggleButton from './components/TOCToggleButton';
import TOCSidebar from './components/TOCSidebar';
import BundleSection from './components/BundleSection';

function App() {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('checkedItemsByBundle');
    return saved ? JSON.parse(saved) : {};
  });

  const [showTOC, setShowTOC] = useState(false);

  useEffect(() => {
    localStorage.setItem('checkedItemsByBundle', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const groupedItems = groupByBundle(items);
  const sortedBundleEntries = Object.entries(groupedItems).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  const total = sortedBundleEntries.reduce((sum, [, arr]) => sum + arr.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const percent = Math.round((checkedCount / total) * 100);

  return (
    <div className="bundle-container">
      <ProgressBar
        percent={percent}
        onReset={() => {
          if (confirm("Are you sure you want to uncheck all items?")) {
            setCheckedItems({});
            localStorage.removeItem('checkedItemsByBundle');
          }
        }}
      />

      <TOCToggleButton
        showTOC={showTOC}
        toggleTOC={() => setShowTOC(prev => !prev)}
      />

      {showTOC && (
        <TOCSidebar
          bundles={sortedBundleEntries}
          onClose={() => setShowTOC(false)}
        />
      )}

      {sortedBundleEntries.map(([bundleName, items]) => (
        <BundleSection
          key={bundleName}
          bundleName={bundleName}
          items={items}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      ))}
    </div>
  );
}

export default App;
