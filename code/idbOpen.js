var idbPromise = idb.open("crdt-app", 2, function (upgradeDb) {
    switch (upgradeDb.oldVersion) {
        case 0:
        case 1:
            upgradeDb.createObjectStore("operations", { keyPath: "_id" });
            upgradeDb.createObjectStore("recipes", { keyPath: "_id" });
            upgradeDb.createObjectStore("ingredients", { keyPath: "_id" });
    }
});
