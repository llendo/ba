function filterOperationsToApply(mappedOperations) {
  return new Promise((resolve, reject) => {
    let recipeOperationsToApply = [];
    let ingredientOperationsToApply = [];
    Array.from(mappedOperations.keys()).forEach((newOp) => {
    let localOp = mappedOperations.get(newOp);
    if (
      !localOp ||
      newOp.timestamp > localOp.timestamp
    ) {
      if (newOp.store == "recipes") {
      recipeOperationsToApply.push(newOp);
      } else ingredientOperationsToApply.push(newOp);
    }
    [...]