import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Rider'), { ssr: false });

export default Page;
