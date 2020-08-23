self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
  if (event.request.url == "https://crdt-app-server.herokuapp.com/api/sync") {
      event.respondWith(fetch(event.request));
  } else {
      event.respondWith(
          caches.match(event.request).then(function (response) {
              return response || fetch(event.request);
          }),
      );
  }
});