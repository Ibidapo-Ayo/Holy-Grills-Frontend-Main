import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Register'), { ssr: false });

export default Page;
