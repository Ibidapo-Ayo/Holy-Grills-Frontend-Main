import dynamic from 'next/dynamic';

const Page = dynamic(() => import('@/pages/OrderDetail'), { ssr: false });

export default Page;
