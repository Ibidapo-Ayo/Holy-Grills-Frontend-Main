import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Home'), { ssr: false });

export default Page;
