import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Addresses'), { ssr: false });

export default Page;
