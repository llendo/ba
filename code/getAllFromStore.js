function getAllFromStore(storeName) {
    return idbPromise.then((db) => {
        let transaction = db.transaction(storeName, "readonly");
        let store = transaction.objectStore(storeName);
        return store.getAll();
    });
}