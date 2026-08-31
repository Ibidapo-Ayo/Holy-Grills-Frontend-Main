import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((reg) => {
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              newWorker.postMessage('SKIP_WAITING');
            }
          });
        });
      }).catch((err) => {
        if (typeof console !== 'undefined') console.warn('[SW] registration failed:', err);
      });
    });

    let refreshing = false;
    const handleControllerChange = () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);
    return () => navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
  }, []);

  return null;
}
