import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Dashboard'), { ssr: false });

export default Page;
