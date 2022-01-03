import { useRouter } from 'next/router';

export default function useActiveRoute() {
  const router = useRouter();

  const isActiveTab = (tab: string) => (
    router.query?.tab ? router.query?.tab === tab : (router.pathname === '/' && tab === 'top')
  );

  const isActiveRoute = (url: string) => router.pathname === url;

  return [isActiveRoute, isActiveTab];
}
