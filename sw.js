const CACHE_NAME = 'pwa-cache-v1';
const assetsToCache = [
    'index.html',
    'style.css',
    'manifest.json',
    'icon-192.png',
    'icon-512.png'
];

// تثبيت الـ Service Worker وحفظ الملفات في التخزين المؤقت
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});

// جلب الملفات من التخزين المؤقت عند انقطاع الإنترنت
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});


