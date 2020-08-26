const query = {
  _id: { $ne: op._id },
  store: op.store,
  object: op.object,
  key: op.key,
  timestamp: { $lt: op.timestamp },
};
return await Operation.findOneAndDelete(query, function (err, doc) {
  if (err) {
    console.log(err);
  }
  if (doc) {
    console.log("Deleted operation ", doc, "from database");
    const index = operations.findIndex((o) => o._id === doc._id);
    if (operations[index] != undefined) {
      console.log("Deleting ", operations[index], "from incoming operations");
      operations.splice(index, 1);
    }
  }
});
