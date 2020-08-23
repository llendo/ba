function updateObject(operation, storeName) {
    return getSingleObjectFromStore(storeName, operation.object)
        .then((objectToUpdate) => {
            return modifyObject(objectToUpdate, operation);
        })
        .then((modifiedObject) => {
            return saveObject(storeName, modifiedObject);
        });
}