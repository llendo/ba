function modifyObject(object, operation) {
  return new Promise(function (resolve, reject) {
    if (object == undefined) {
      object = {
        _id: operation.object,
      };
    }
    var modifiedObject = object;
    modifiedObject[operation.key] = operation.value;
    saveObject("operations", operation);
    resolve(modifiedObject);
  });
}