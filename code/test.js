function createObjectStore() {
    var request = indexedDB.open("example-database", 1);  
    request.onsuccess = function (evt) {
        db = request.result;                                                            
    };
 
    request.onerror = function (evt) {
        console.log("IndexedDB error: " + evt.target.errorCode);
    };
 
    request.onupgradeneeded = function (evt) {                   
        var objectStore = evt.currentTarget.result.createObjectStore("example-objectStore", 
                                     { keyPath: "id", autoIncrement: true });
        }
    };
}

var idbCreateObjectStore(){
    var idbPromise = idb.open('crdt-app', 1, function(upgradeDb) {
            upgradeDb.createObjectStore('example-objectStore', { keyPath: 'id'});
    };
});
