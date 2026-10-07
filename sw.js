// Service worker d'Atelier : rend l'app installable et force le navigateur
// à vérifier à chaque ouverture si les fichiers de l'app ont changé sur GitHub.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req.url, { cache: "no-cache", credentials: "same-origin" }).catch(() => fetch(req))
  );
});
