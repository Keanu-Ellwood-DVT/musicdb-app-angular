/* eslint-disable no-restricted-globals */
/* eslint-disable prettier/prettier */
const cacheName = 'artist-list-page';
const staticAssets = [
  './',
  'src/app/artist/artist-list/artist-list.component.html',
  'src/app/artist/artist-list/artist-list.component.ts',
  'src/app/artist/artist-list/artist-list.component.css'
]

// eslint-disable-next-line no-unused-vars
self.addEventListener('install', async _event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
})

// eslint-disable-next-line no-unused-vars
self.addEventListener('activate', _event => {
  self.clients.claim();
})

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName)

  try {
    const fresh = await fetch(req)
    await cache.put(req, fresh.clone())
    return fresh
  } catch {
    const cached = await cache.match(req)
    return cached
  }
}

self.addEventListener('fetch', async event => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(networkAndCache(req));
  }
})


