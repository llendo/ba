function mapOperations(localOperations, newOperations) {
  return new Promise((resolve, reject) => {
  let mappedOperations = new Map();
  let sortedLocalOperations = localOperations.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  newOperations.forEach((newOperation) => {
    let mostRecentMatchingLocalOperation = sortedLocalOperations.find(
    (localOperation) =>
      localOperation.store === newOperation.store &&
      localOperation.object === newOperation.object &&
      localOperation.key === newOperation.key,
    );
    mappedOperations.set(newOperation, mostRecentMatchingLocalOperation);
  });
  if (mappedOperations.size > 0) {
    console.log("Mapped new operations to local operations");
    resolve(mappedOperations);
  [...]