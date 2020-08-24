function sync() {
  return getAllFromStore("operations")
    .then((operations) => {
      return fetch("https://crdt-app-server.herokuapp.com/api/sync", {
        method: "POST",
        body: JSON.stringify(operations),
        headers: {
          "Content-Type": "application/json",
        },
      });
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return processOperations(data);
    })
    .catch((e) => console.log(e));
}