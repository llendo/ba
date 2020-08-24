function initDB() {
  var request = indexedDB.open("example-db", 1);  
  request.onsuccess = function (evt) {
    db = request.result;                              
  };
 
  request.onupgradeneeded = function (evt) {           
    var objectStore = evt.currentTarget.result.createObjectStore("example-store", { keyPath: "id", autoIncrement: true });
    }
  };
};
