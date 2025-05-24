const CACHE_NAME = 'calc-notas-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/home.html',
  '/Recuperacao.html',
  '/SegundaSerie.html',
  '/Portugues.html',
  '/PrimeiraSerie.html',
  '/FaltaQuanto.html',
  '/TerceiraSerie.html',
  '/styles.css',
  '/script.js',
  '/livro.png',
  '/iconefalta.png',
  '/bad-grades.png',
  '/btnterceira.png',
  '/btnsegunda.png',
  '/btnprimeira.png',
  '/meninoestudando.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 