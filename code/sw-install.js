self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cachename).then(function (cache) {
      console.log("cache opened");
      return cache.addAll(urlstocache);
    }),
  );
});