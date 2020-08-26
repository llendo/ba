function filterOperationsToApply(mappedOperations) {
  return new Promise((resolve, reject) => {
    let recipeOperationsToApply = [];
    let ingredientOperationsToApply = [];
    Array.from(mappedOperations.keys()).forEach((newOperation) => {
    let localOperation = mappedOperations.get(newOperation);
    if (
      !localOperation ||
      newOperation.timestamp > localOperation.timestamp
    ) {
      if (newOperation.store == "recipes") {
      recipeOperationsToApply.push(newOperation);
      } else ingredientOperationsToApply.push(newOperation);
    }
    [...]