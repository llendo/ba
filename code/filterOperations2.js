[...]
let operationsToApply = new Map([
    ["recipes", recipeOperationsToApply],
    ["ingredients", ingredientOperationsToApply],
  ]);
  if (
    operationsToApply.get("recipes").length > 0 ||
    operationsToApply.get("ingredients").length > 0
  ) {
    resolve(operationsToApply);
[...]