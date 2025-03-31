self.addEventListener('install', (event) => {
    console.log('Service Worker instalado.');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker ativado.');
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Provérbios do Dia';
    const options = {
        body: data.body || 'Leia o capítulo de hoje e edifique seu espírito!',
        icon: 'bible-.png',
        badge: 'bible-.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});