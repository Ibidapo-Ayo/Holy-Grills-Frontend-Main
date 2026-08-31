import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Rewards'), { ssr: false });

export default Page;
