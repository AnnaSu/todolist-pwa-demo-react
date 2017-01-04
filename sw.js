const filesToCache = [
    '/',
    '/assets/images/btn_check.png',
    '/assets/images/btn_del.png',
    '/assets/images/ic_add.png',
    '/assets/images/logo_todo.png',
    '/src/main.css',
    '/index.html'
];
const cacheName = 'todolist-v1';
const dataCacheName = 'todolist-v1-data';

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

// activate
self.addEventListener('activate', event => {
    console.log('now ready to handle fetches!');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            var promiseArr = cacheNames.map(function(item) {
                if (item !== cacheName) {
                    // Delete that cached file
                    console.log('[ServiceWorker] Removing Cached Files from Cache - ', item);
                    return caches.delete(item);
                }
            })
            return Promise.all(promiseArr);
        })
    ); // end event.waitUntil
})

// fetch
self.addEventListener('fetch', event => {
    console.log('now fetch!');
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request).then(res =>
                caches.open(dataCacheName)
                .then(function(cache) {
                    cache.put(event.request, res.clone());
                    return res;
                })
            );
        })
    );
})
