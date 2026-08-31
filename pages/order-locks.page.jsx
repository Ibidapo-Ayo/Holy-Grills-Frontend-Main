import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/OrderLocks'), { ssr: false });

export default Page;
