// 원격 통역 대화 — 항상 최신 파일을 받는 서비스 워커(옛 캐시는 지움)
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener('fetch',e=>{});
