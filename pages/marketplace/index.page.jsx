import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Marketplace'), { ssr: false });

export default Page;
