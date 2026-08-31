import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Admin'), { ssr: false });

export default Page;
