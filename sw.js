const VERSION = 'v1'

self.addEventListener('install', (event) => {
  event.waitUntil(precache())
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  // get
  if (request.method !== 'GET') {
    return;
  };

  event.respondWith(cachedResponse(request))
});

async function precache () {
  const cache = await caches.open(VERSION);
  cache.addAll([
    '/',
    '/public/index.html',
    '/src/index.js',
  ]);
};

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
};
