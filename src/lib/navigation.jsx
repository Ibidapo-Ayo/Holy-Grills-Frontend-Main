import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const toPath = (to) => {
  if (typeof to === 'string') return to;
  if (to && typeof to === 'object') {
    const pathname = to.pathname || '/';
    const search = to.search || '';
    const hash = to.hash || '';
    return `${pathname}${search}${hash}`;
  }
  return '/';
};

export function Link({ to, href, children, ...props }) {
  return (
    <NextLink href={toPath(to || href)} {...props}>
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useRouter();
  return (to, options = {}) => {
    if (typeof to === 'number') {
      if (to < 0) router.back();
      return;
    }
    const url = toPath(to);
    if (options?.replace) {
      router.replace(url);
      return;
    }
    router.push(url);
  };
}

export function useLocation() {
  const router = useRouter();
  const asPath = router.asPath || '';
  const hashIndex = asPath.indexOf('#');
  const queryIndex = asPath.indexOf('?');
  const pathname = queryIndex >= 0 ? asPath.slice(0, queryIndex) : hashIndex >= 0 ? asPath.slice(0, hashIndex) : asPath || router.pathname;
  const search = queryIndex >= 0 ? asPath.slice(queryIndex, hashIndex >= 0 ? hashIndex : undefined) : '';
  const hash = hashIndex >= 0 ? asPath.slice(hashIndex) : '';
  return {
    pathname,
    search,
    hash,
    state: null,
    key: pathname,
  };
}

export function useParams() {
  const { query } = useRouter();
  const params = {};
  Object.entries(query || {}).forEach(([key, value]) => {
    params[key] = Array.isArray(value) ? value[0] : value;
  });
  return params;
}

export function useSearchParams() {
  const router = useRouter();
  const current = typeof window !== 'undefined' ? window.location.search : '';
  const params = new URLSearchParams(current);
  const setSearchParams = (nextValue) => {
    const nextParams = new URLSearchParams(nextValue);
    const qs = nextParams.toString();
    router.push(`${router.pathname}${qs ? `?${qs}` : ''}`);
  };
  return [params, setSearchParams];
}

export function useNavigationType() {
  return 'PUSH';
}

export function Navigate({ to, replace }) {
  const router = useRouter();
  useEffect(() => {
    const target = toPath(to);
    if (replace) {
      router.replace(target);
      return;
    }
    router.push(target);
  }, [to, replace, router]);
  return null;
}

export function Outlet({ children = null }) {
  return children;
}

export function BrowserRouter({ children }) {
  return children;
}

export function Routes({ children }) {
  return children;
}

export function Route() {
  return null;
}
