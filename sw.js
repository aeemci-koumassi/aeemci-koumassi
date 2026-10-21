// AEEMCI Sous-Comité de Koumassi - Auto-désinstallation Service Worker PWA
// Ce script désenregistre tout ancien service worker et nettoie le cache pour rétablir une navigation 100% site web direct.

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  self.registration.unregister()
    .then(function() {
      return self.clients.matchAll();
    })
    .then(function(clients) {
      clients.forEach(function(client) {
        if (client.url && 'navigate' in client) {
          client.navigate(client.url);
        }
      });
    });

  if ('caches' in self) {
    caches.keys().then(function(names) {
      names.forEach(function(name) {
        caches.delete(name);
      });
    });
  }
});
