function processOperations(newOperations) {
  if (newOperations.length > 0) {
    return getAllFromStore("operations")
      .then((localOperations) => {
        //console.log(localOperations)
        return mapOperations(localOperations, newOperations);
      })
      [...]