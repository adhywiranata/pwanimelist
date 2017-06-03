// import toolbox from 'sw-toolbox';
// console.log(toolbox);
//
// toolbox.router.get('https://myanimelist.cdn-dena.com/images/*', toolbox.cacheFirst);
console.log('is this even called???');
var CACHE_NAME = 'pwanimelist-cache-v1';
var urlsToCache = [
  '/',
  '/manifest.json',
  '/service-worker.js',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  console.log('installing service worker');
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
  console.log('Service Worker is Fetching..');
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
