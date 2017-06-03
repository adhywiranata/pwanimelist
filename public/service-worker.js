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

// Fired when the Service Worker starts up
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating....');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((key) => {
        if( key !== cacheName) {
          console.log('Service Worker: Removing Old Cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
