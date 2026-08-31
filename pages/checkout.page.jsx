import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/Checkout'), { ssr: false });

export default Page;
