import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Streak'), { ssr: false });

export default Page;
