function initDB(){
    return idb.open('example-db', 1, function(upgradeDb) {
    upgradeDb.createObjectStore('example-store', { keyPath: 'id'});
    });
}
