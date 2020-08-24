function generateUpdateOperation(store, Id, key, value) {
  let targetStore = store;
  let targetObject = Id;
  let targetKey = key;
  let targetValue = value;
  let timestamp = Date.now();
  console.log("Changed " + targetObject + "property " + targetKey + "to " + targetValue + "in " + targetStore,);
  return {
    store: targetStore,
    object: targetObject,
    key: targetKey,
    value: targetValue,
    timestamp: timestamp,
    _id: "op_" + cuid(),
  };
}