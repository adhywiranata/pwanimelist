const CACHE_NAME = 'pwanimelist-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // add all files to cache
        return cache.addAll(urlsToCache);
      });
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // no Cache - return fetch
        return fetch(event.request);
      }
    );
  );
});
