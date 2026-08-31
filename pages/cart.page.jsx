import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Cart'), { ssr: false });

export default Page;
