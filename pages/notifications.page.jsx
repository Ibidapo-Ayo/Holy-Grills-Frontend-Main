import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Notifications'), { ssr: false });

export default Page;
