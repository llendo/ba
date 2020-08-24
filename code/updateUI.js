loadUIData: function (dataName) {
  return new Promise ((resolve, reject) => {
    return getAllFromStore(dataName).then(loadedObjects => {
      this[dataName] = loadedObjects.reverse();
      resolve('Updated ' + dataName + 'UI Components');
    });
  });
  }