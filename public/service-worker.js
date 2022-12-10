const cacheName = "v1";

self.addEventListener("fetch", (e) => {
  if (e.request.destination !== "image" && !e.request.url.endsWith(".png")) {
    return;
  }
  e.respondWith(
    (async () => {
      const match = await caches.match(e.request);
      if (match) {
        return match;
      }
      const res = await fetch(e.request);
      const cache = await caches.open(cacheName);
      cache.put(e.request, res.clone());
      return res;
    })()
  );
});
