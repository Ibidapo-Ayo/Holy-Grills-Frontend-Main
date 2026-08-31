import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { AuthProvider } from '@/lib/AuthContext';
import { HolyGrillProvider } from '@/lib/HolyGrillContext';
import { SoundProvider } from '@/lib/SoundProvider';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollToTop from '@/components/ScrollToTop';
import InstallPrompt from '@/components/InstallPrompt';
import CookieConsent from '@/components/CookieConsent';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import Layout from '@/components/Layout';
import { isAuthenticated } from '@/lib/apiClient';

const NO_LAYOUT_ROUTES = new Set([
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/admin',
  '/kitchen',
  '/rider',
  '/404',
]);

const AUTH_ROUTES = new Set([
  '/dashboard',
  '/hp-education',
  '/rewards',
  '/wallet',
  '/profile',
  '/addresses',
  '/notification-preferences',
  '/notifications',
  '/referrals',
  '/order-locks',
  '/streak',
  '/hall-of-fame',
]);

export default function ClientAppShell({ Component, pageProps }) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [authed, setAuthed] = useState(false);

  const pathname = router.pathname;
  const requiresAuth = AUTH_ROUTES.has(pathname);
  const usesLayout = !NO_LAYOUT_ROUTES.has(pathname);

  useEffect(() => {
    const loggedIn = isAuthenticated();
    setAuthed(loggedIn);
    setAuthChecked(true);
    if (requiresAuth && !loggedIn) {
      router.replace(`/login?from=${encodeURIComponent(router.asPath)}`);
    }
  }, [requiresAuth, router]);

  const content = useMemo(() => {
    if (requiresAuth && (!authChecked || !authed)) {
      return <div className="min-h-screen bg-background" />;
    }
    const page = <Component {...pageProps} />;
    return usesLayout ? <Layout>{page}</Layout> : page;
  }, [requiresAuth, authChecked, authed, Component, pageProps, usesLayout]);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <ScrollToTop />
          <SoundProvider>
            <HolyGrillProvider>
              {content}
              <InstallPrompt />
              <CookieConsent />
              <ServiceWorkerRegistration />
            </HolyGrillProvider>
          </SoundProvider>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
