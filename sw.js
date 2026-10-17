// Service Worker PWA - AEEMCI Sous-Comité de Koumassi
const CACHE_NAME = 'aeemci-koumassi-pwa-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './historique.html',
  './activites.html',
  './actualites.html',
  './galerie.html',
  './contact.html',
  './css/style.css',
  './js/main.js',
  './js/base_donnees.js',
  './images/logo.png',
  './images/icon-192.png',
  './images/icon-512.png',
  './manifest.json'
];

// Installation : Mise en cache des ressources essentielles
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('PWA: Avertissement pre-cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activation : Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Récupération des requêtes (Stratégie hybride hors-ligne)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignorer les requêtes non-GET ou externes non critiques
  if (req.method !== 'GET') return;

  // Pour les pages de navigation HTML : Réseau d'abord, secours sur le cache hors-ligne
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const resClone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return networkRes;
        })
        .catch(() => {
          return caches.match(req).then((cached) => {
            return cached || caches.match('./index.html');
          });
        })
    );
    return;
  }

  // Pour les ressources statiques locales (CSS, JS, images) : Cache d'abord
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then((cachedRes) => {
        if (cachedRes) return cachedRes;

        return fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const resClone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return networkRes;
        }).catch(() => {
          // Secours silencieux si hors-ligne
          return null;
        });
      })
    );
  }
});
