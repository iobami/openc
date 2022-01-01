import { useRouter } from 'next/router';

export default function useActiveTab() {
  const router = useRouter();

  const isActive = (tab: string) => (
    router.query?.tab ? router.query?.tab === tab : (router.pathname === '/' && tab === 'top')
  );

  return isActive;
}
