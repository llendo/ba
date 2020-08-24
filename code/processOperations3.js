[...]
.then((validOperationsMap) => {
  return Promise.all(
    Array.from(validOperationsMap.keys()).map((storeName) => {
      return Promise.all(
        validOperationsMap.get(storeName).map((validOperation) => {
            return updateObject(validOperation, storeName);
[...]