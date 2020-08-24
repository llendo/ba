exports.processOperations = (req, res) => {
  const operations = req.body;
  [...]
  .then(() => {
    return Operation.insertMany(operations, { ordered: false });
  })
  .catch((e) => {
    console.log(e);
  })
  .then(() => {
    return Operation.find({});
  })
  .then((operations) => {
    return res.send(operations);
  })
[...]