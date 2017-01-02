const filesToCache = [
    '/',
    '/index.html'
];
const cacheName = 'todolist-v1';

// install
self.addEventListener('install', event => {
    console.log('installing…');
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('Caching app ok');
            return cache.addAll(filesToCache);
        })
    );
});
