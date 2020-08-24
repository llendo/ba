function saveObject(storeName, object) {
  idbPromise.then((db) => {
    let transaction = db.transaction(storeName, "readwrite");
    let store = transaction.objectStore(storeName);
    return store.put(object);
  });
}