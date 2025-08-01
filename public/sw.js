// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  console.log("[sw] install event");
  event.waitUntil(
    caches.open("v1").then((cache) => {
      console.log("[SW] Caching assets");
      return cache.addAll(["/"]);
    })
  );
});
