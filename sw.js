// Minimal service worker: only exists so the browser treats this
// page as an installable app on Android. It does not cache data
// (the app's real data lives in Firebase, not in this cache).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {}); // pass-through, no offline caching
