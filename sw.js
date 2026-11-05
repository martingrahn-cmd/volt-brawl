const CACHE = 'volt-brawl-1.2.0+9243179'

self.addEventListener('install', () => {
  /* The Update button calls skipWaiting once the player asks for the new build. */
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  if (url.pathname.endsWith('version.json')) return
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE)
      const navigation = request.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html')
      const cached = await cache.match(request)
      if (navigation && cached) return cached
      try {
        const fresh = await fetch(request)
        if (fresh.ok) await cache.put(request, fresh.clone())
        return fresh
      } catch (error) {
        if (cached) return cached
        throw error
      }
    })(),
  )
})
