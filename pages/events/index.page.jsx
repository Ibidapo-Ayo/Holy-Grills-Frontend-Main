import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Events'), { ssr: false });

export default Page;
