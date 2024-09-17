self.addEventListener('install', evento => {
  evento.waitUntil(
    caches.open('meu-pwa').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'sw.js',
        'icone.png'
      ]);
    })
  );
});

self.addEventListener('fetch', evento => {
  evento.respondWith(
    caches.match(evento.request).then(resposta => {
      return resposta || fetch(evento.request);
    })
  );
});
