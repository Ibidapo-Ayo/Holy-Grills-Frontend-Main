import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Profile'), { ssr: false });

export default Page;
