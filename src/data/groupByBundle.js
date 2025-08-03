// src/data/groupByBundle.js
const groupByBundle = (items) => {
  const bundleMap = {};
  items.forEach(item => {
    const bundles = item.bundle.split('|').map(b => b.trim());
    bundles.forEach(bundle => {
      if (!bundleMap[bundle]) {
        bundleMap[bundle] = [];
      }
      bundleMap[bundle].push(item);
    });
  });
  return bundleMap;
};

export default groupByBundle;
