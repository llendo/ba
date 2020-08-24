function filterOperationsToApply(mappedOperations) {
  return new Promise((resolve, reject) => {
    let recipeOperationsToApply = [];
    let ingredientOperationsToApply = [];
    Array.from(mappedOperations.keys()).forEach((mappedOperation) => {
      let recentMatchingOperation = mappedOperations.get(mappedOperation);
      if (
        !recentMatchingOperation ||
        mappedOperation.timestamp > recentMatchingOperation.timestamp
      ) {
        if (mappedOperation.store == "recipes") {
          recipeOperationsToApply.push(mappedOperation);
        } else ingredientOperationsToApply.push(mappedOperation);
      }
      if (
        !!recentMatchingOperation &&
        mappedOperation.timestamp > recentMatchingOperation.timestamp
      ) {
        deleteOperation(recentMatchingOperation._id);
      }
    });
    let operationsToApply = new Map([
      ["recipes", recipeOperationsToApply],
      ["ingredients", ingredientOperationsToApply],
    ]);
    if (
      operationsToApply.get("recipes").length > 0 ||
      operationsToApply.get("ingredients").length > 0
    ) {
      resolve(operationsToApply);
    }
    reject(
      "Local operations are already up to date. No newer operations found!",
    );
  });
}