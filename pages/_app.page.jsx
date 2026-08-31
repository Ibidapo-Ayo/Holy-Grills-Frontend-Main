import '@/index.css';
import dynamic from 'next/dynamic';

const ClientAppShell = dynamic(() => import('@/components/ClientAppShell'), { ssr: false });

export default function MyApp(props) {
  return <ClientAppShell {...props} />;
}
