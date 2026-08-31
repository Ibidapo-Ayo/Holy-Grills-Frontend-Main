import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Orders'), { ssr: false });

export default Page;
